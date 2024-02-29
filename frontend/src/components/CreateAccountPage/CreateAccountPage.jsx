import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountPage.css";

function CreateAccountPage() {
  const [user, setUser] = useState({
    nome_usuario: "",
    nome_completo: "",
    sexo: "",
    email: "",
    senha: "",
    tipo_conta: "",
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", user).then((response) => {
      console.log(response);
      if (user.tipo_conta === "aluno") {
        navigate("/LoginAluno");
      } else if (user.tipo_conta === "professor") {
        navigate("/LoginProfessor");
      }
    });
  };

  return (
    <div className="create-account-container">
      <form onSubmit={submitHandler}>
        <h2>Motiva Fit - Crie uma Conta</h2>
        <input
          type="text"
          name="nome_usuario"
          onChange={(e) => setUser({ ...user, nome_usuario: e.target.value })}
          placeholder="Nome do usuário"
        />
        <input
          type="text"
          name="nome_completo"
          onChange={(e) => setUser({ ...user, nome_completo: e.target.value })}
          placeholder="Nome completo"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          name="senha"
          onChange={(e) => setUser({ ...user, senha: e.target.value })}
          placeholder="Senha"
        />
        <select
          name="tipo_conta"
          onChange={(e) => setUser({ ...user, tipo_conta: e.target.value })}
        >
          <option value="">Selecione o tipo de conta</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
