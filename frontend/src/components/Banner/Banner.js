import styles from "./Banner.module.css";

// var numMetaConcluida = 7;

function Banner(props) {
  return (
    <div id={styles.idBannerBackground}>
      <div id={styles.idResumoBanner}>
        {/* ----- Foto Usuario -----*/}
        <div>
          <img src={props.userImg} alt="" />
        </div>
        <div id={styles.idBannerUserInfo}>
          {/* ----- Mensagem Inicial ----- */}
          <p>
            {props.msgBom},{" "}
            <span id={styles.idBannerUserName}>{props.userName}!</span>
          </p>

          {/* ----- Barra de progresso 0-7 ----- */}
          {/* <div>
                <p id={styles.idProgressoTxt}>Treinos desta Semana:</p>
                <div id={styles.idBannerBarraDeProgresso}>
                <div id={styles.idBannerProgresso} >
                    {numMetaConcluida}/7
                </div>
                </div>
            </div> */}

          {/* ----- Mensagem Ranking ----- */}
          {/* <p id={styles.idBannerRankingText}>Sua Divisão: {props.userRanking}</p> */}

          {/* Botao Editar Perfil */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
