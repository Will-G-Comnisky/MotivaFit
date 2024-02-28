import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountPage.css";

function CreateAccountPage() {
  const [fullName, setFullName] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não correspondem!");
      return;
    }
    const user = { fullName, type, gender, age, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    console.log(`Usuário criado: ${JSON.stringify(user)}`);
    // Redireciona para a página de login correspondente
    if (type === "aluno") {
      navigate("/LoginAluno");
    } else if (type === "professor") {
      navigate("/LoginProfessor");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit}>
        <h2>Motiva Fit - Crie uma Conta</h2>
        <input
          type="text"
          value={userID}
          onChange={handleUserIDChange}
          placeholder="Nome de Usuário"
        />
        <input
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Nome Completo"
        />
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <select value={type} onChange={handleTypeChange}>
          <option value="">Tipo da conta</option>
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
        </select>
        <input
          type="date"
          value={age}
          onChange={handleAgeChange}
          placeholder="Data nascimento"
        />
        <input
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          placeholder="CPF"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Senha"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirme a Senha"
        />
        <input type="submit" value="Criar Conta" />
        <button className="back-button" onClick={handleBack}>
          Voltar
        </button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
