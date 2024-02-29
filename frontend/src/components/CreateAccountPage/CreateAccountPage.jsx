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
    confirmSenha: "", // novo campo para confirmação de senha
    tipo_conta: "",
  });
  const [error, setError] = useState(""); // novo estado para erros
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // verifica se as senhas são iguais antes de enviar a solicitação
    if (user.senha !== user.confirmSenha) {
      setError("As senhas não correspondem");
      return;
    }
    axios.post("http://localhost:5000/register", user).then((response) => {
      console.log(response);
      if (user.tipo_conta === "aluno") {
        navigate("/LoginAluno");
      } else if (user.tipo_conta === "professor") {
        navigate("/LoginProfessor");
      }
    });
  };

  const handleBack = () => {
    navigate("/");
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
        <input
          type="password"
          name="confirmSenha"
          onChange={(e) => setUser({ ...user, confirmSenha: e.target.value })}
          placeholder="Confirme a senha"
        />
        <select
          name="tipo_conta"
          onChange={(e) => setUser({ ...user, tipo_conta: e.target.value })}
        >
          <option value="">Selecione o tipo de conta</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
        </select>
        {error && <p>{error}</p>} {/* exibe o erro, se houver */}
        <button className="create-account-button" type="submit">
          Registrar
        </button>
        <button type="button" className="back-button" onClick={handleBack}>
          Voltar
        </button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
