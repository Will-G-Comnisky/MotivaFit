import styles from './Banner.module.css'

function Banner(props){
    return(
    
    <div id={styles.idBannerBackground}>
        <div id={styles.idResumoBanner}>
            {/* ----- Foto Usuario -----*/}
            <div>
                <img src={props.userImg} alt="" />
            </div>
            <div id={styles.idBannerUserInfo}>

            {/* ----- Mensagem Inicial ----- */}
            <p>{props.msgBom}, <span id={styles.idBannerUserName}>{props.userName}</span>!</p>

            {/* ----- Barra de progresso 0-7 ----- */}
            <div>
                <p id={styles.idProgressoTxt}>Treinos desta Semana:</p>
                <div id={styles.idBannerBarraDeProgresso}>
                <div id={styles.idBannerProgresso}>
                    {props.numMetaConcluida}/7
                </div>
                </div>
            </div>

            {/* ----- Mensagem Ranking ----- */}
            <p id={styles.idBannerRankingText}>Sua Divisão: {props.userRanking}</p>

            {/* Botao Editar Perfil */}
            <div id={styles.idBannerBotaoBackground}>
                <div id="idFiller"></div>
                <button id={styles.idBannerBotao}>Editar Perfil</button>
            </div>
            </div>
        </div>
    </div>
    
    )
}

export default Banner