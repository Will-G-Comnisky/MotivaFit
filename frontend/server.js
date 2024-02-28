require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "motiva",
  host: "localhost",
  database: "motiva_fit",
  password: "motiva",
  port: 5432,
});

app.post("/register", async (req, res) => {
  const { fullName, type, gender, birthdate, email, password, userID, cpf } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      "INSERT INTO users (fullName, type, gender, birthdate, email, password, userID, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [fullName, type, gender, birthdate, email, hashedPassword, userID, cpf]
    );

    const token = jwt.sign(
      { userID: newUser.rows[0].userID },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (validPassword) {
        const token = jwt.sign(
          { userID: user.rows[0].userID },
          process.env.JWT_SECRET
        );
        res.json({ token, user: user.rows[0] });
      } else {
        res.json({ error: "Invalid Password" });
      }
    } else {
      res.json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/currentUser", async (req, res) => {
  // Verifique se o token JWT foi enviado no cabeçalho da requisição
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Verifique o token e obtenha o ID do usuário
  let userID;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    userID = decoded.userID;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }

  // Busque o usuário no banco de dados
  try {
    const user = await pool.query("SELECT * FROM users WHERE userID = $1", [
      userID,
    ]);
    if (user.rows.length > 0) {
      res.json(user.rows[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
