import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("tipo_conta"); // remove o tipo de conta do localStorage

    navigate("/");
  };

  const handleHome = () => {
    // Obtenha o tipo de conta do localStorage
    const tipo_conta = localStorage.getItem("tipo_conta");

    // Verifique o tipo de conta e navegue para a página inicial correspondente
    if (tipo_conta === "aluno") {
      navigate("/AlunoMainPage");
    } else if (tipo_conta === "professor") {
      navigate("/PersonalTrainerMainPage");
    } else {
      // Se não houver usuário logado ou o tipo de conta for desconhecido, navegue para a página inicial padrão
      navigate("/");
    }
  };

  return (
    <div id={styles.idNav}>
      <div id={styles.idNavImgBackground}>
        {/* ----- Imagem ----- */}
        <img
          src={props.logo}
          id={styles.idNavImg}
          alt=""
          onClick={handleHome}
        />
      </div>
      <div id={styles.idLogoName} onClick={handleHome}>
        Motiva Fit
      </div>

      <div id={styles.idFiller}></div>

      <div>
        <button className={styles.clNavBotao} onClick={handleHome}>
          Início
        </button>
      </div>

      <div className={styles.clNavBotaoBackground}>
        <button className={styles.clNavBotao} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
