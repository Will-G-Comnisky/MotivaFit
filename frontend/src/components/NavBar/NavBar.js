import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar(props){
    const navigate = useNavigate();

    const handleLogout = () => {
        // Aqui você pode adicionar a lógica de logout
        // Primeiro, removemos o usuário do localStorage
        localStorage.removeItem("user");

        // Depois de fazer logout, redirecionamos o usuário
        navigate("/");
    }

    const handleHome = () => {
        // Depois de fazer logout, redirecionamos o usuário
        navigate("/PersonalTrainerMainPage");
    }

    return(
        
        <div id={styles.idNav}>

            <div id={styles.idNavImgBackground}>
                {/* ----- Imagem ----- */}
                <img src={props.logo} id={styles.idNavImg} alt="" onClick={handleHome}/>
            </div>
            <div id={styles.idLogoName} onClick={handleHome}>
                Motiva Fit
            </div>

            <div id={styles.idFiller}></div>

            <div><button className={styles.clNavBotao} onClick={handleHome}>Início</button></div>

            <div className={styles.clNavBotaoBackground}>
                <button className={styles.clNavBotao} onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    )
}

export default NavBar
