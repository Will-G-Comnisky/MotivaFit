const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

const pool = new Pool({
  host: "localhost",
  user: "motiva",
  password: "motiva",
  database: "motiva_fit",
  port: 5432,
});

app.post("/register", (req, res) => {
  let data = [
    req.body.nome_usuario,
    req.body.nome_completo,
    req.body.sexo,
    req.body.email,
    req.body.senha,
    req.body.tipo_conta,
  ];
  let sql =
    "INSERT INTO usuarios (nome_usuario, nome_completo, sexo, email, senha, tipo_conta) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id";
  pool.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send("Usuário adicionado com ID: " + result.rows[0].id);
  });
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  let sql = "SELECT * FROM usuarios WHERE email = $1";
  pool.query(sql, [email], (err, result) => {
    if (err) throw err;
    if (result.rows.length > 0) {
      let user = result.rows[0];
      if (user.senha === password) {
        // em um aplicativo real, a senha deve ser criptografada
        res.json(user);
      } else {
        res.status(401).send("Senha incorreta");
      }
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor iniciado na porta 5000...");
});
