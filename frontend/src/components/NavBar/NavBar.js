import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./NavBar.module.css";

function NavBar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session");

    navigate("/");
  };

  const handleHome = async () => {
    // Obtenha o usuário do banco de dados
    const response = await axios.get("http://localhost:5000/currentUser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("session")}`,
      },
    });
    const user = response.data;

    // Verifique o tipo de usuário e navegue para a página inicial correspondente
    if (user && user.type === "aluno") {
      navigate("/AlunoMainPage");
    } else if (user && user.type === "professor") {
      navigate("/PersonalTrainerMainPage");
    } else {
      // Se não houver usuário logado ou o tipo de usuário for desconhecido, navegue para a página inicial padrão
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
