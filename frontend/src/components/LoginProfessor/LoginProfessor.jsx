import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginProfessor.css";

function LoginProfessor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/login", { email, password })
      .then((response) => {
        console.log(response);
        if (response.data.tipo_conta === "professor") {
          localStorage.setItem("tipo_conta", "professor");
          navigate("/PersonalTrainerMainPage");
        } else {
          setError("Apenas professores podem fazer login por aqui");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Ocorreu um erro ao tentar fazer login");
      });
  };

  const handleTermsClick = (event) => {
    event.preventDefault();
    setShowTerms(true);
  };

  // Obtenha a data atual do sistema
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Motiva Fit</h2>
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
        <input type="submit" value="Entrar" />
        {error && <p>{error}</p>}
        <a href="/ForgotPassword">Esqueceu a senha? Clique aqui</a>
        <a href="/CreateAccountPage">Crie uma conta!</a>
        <button className="terms-link" onClick={handleTermsClick}>
          Termos de Uso
        </button>
      </form>
      {showTerms && (
        <div className="modal-container">
          <div className="modal-content">
            <h1>Termos de Uso</h1>
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar esta página de gerenciamento de personal
              trainers ("Serviço"), você aceita e concorda em estar vinculado
              por estes Termos de Uso.
            </p>
            <h2>2. Descrição do Serviço</h2>
            <p>
              Oferecemos uma plataforma online que conecta personal trainers a
              alunos, permitindo que os personal trainers gerenciem seus alunos
              e sessões de treinamento.
            </p>
            <h2>3. Registro</h2>
            <p>
              Para acessar nosso Serviço, os usuários devem se registrar e
              fornecer certas informações, como nome, endereço de e-mail e, se
              aplicável, detalhes de qualificação profissional.
            </p>
            <h2>4. Conduta do Usuário</h2>
            <p>
              Os usuários concordam em usar o Serviço de maneira profissional e
              respeitosa. Qualquer comportamento inadequado pode resultar na
              suspensão ou término do acesso ao Serviço.
            </p>
            <h2>5. Direitos de Propriedade</h2>
            <p>
              Todo o conteúdo disponível através do Serviço é propriedade de
              seus respectivos proprietários e é protegido por leis de direitos
              autorais e marcas registradas.
            </p>
            <h2>6. Isenção de Responsabilidade</h2>
            <p>
              O Serviço é fornecido "como está". Não oferecemos garantias ou
              representações de qualquer tipo em relação ao Serviço.
            </p>
            <h2>7. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos a qualquer
              momento. Recomendamos que os usuários revisem regularmente estes
              Termos.
            </p>
            <h2>8. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato
              conosco.
            </p>
            <p>Data: {currentDate}</p>
            <button
              className="close-button"
              onClick={() => setShowTerms(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginProfessor;
