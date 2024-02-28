import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout
    // Primeiro, removemos a sessão do localStorage
    localStorage.removeItem("session");

    // Depois de fazer logout, redirecionamos o usuário
    navigate("/");
  };

  const handleHome = () => {
    // Obtenha o usuário do localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Verifique o tipo de usuário e navegue para a página inicial correspondente
    if (user && user.type === "aluno") {
      navigate("/AlunoMainPage");
    } else if (user && user.type === "professor") {
      navigate("/PersonalTrainerMainPage");
    } else {
      // Se não houver usuário no localStorage ou o tipo de usuário for desconhecido, navegue para a página inicial padrão
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
