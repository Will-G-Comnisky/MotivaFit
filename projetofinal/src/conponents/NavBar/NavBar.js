import styles from "./NavBar.module.css"

function NavBar(props){
    return(
        <div id={styles.idNav}>

            <div id={styles.idNavImgBackground}>
                {/* ----- Imagem ----- */}
                <img src={props.logo} id={styles.idNavImg} alt="" />
            </div>

            <div id={styles.idFiller}></div>
            <div className={styles.clNavBotaoBackground}>
                <button className={styles.clNavBotao} >Logout</button>
            </div>
            
        </div>
    )
}

export default NavBar