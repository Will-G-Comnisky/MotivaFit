import styles from './BotaoCadastro.module.css'

function BotaoCadastro(props){
    return(
        <div id={styles.idBotaoLink}>
            {/* ----- Label/Nome do Botão ----- */}
            <p id={props.idText} className={styles.clBotaoName}>{props.nome}</p>
            {/* ----- Link -----  */}
                <form onSubmit={props.buttonFunction}>
                    <button onClick={props.buttonFunctiom}>
                        <div id={styles.idBotaoBackground}>
                            {/* ----- Icone do Botão ----- */}
                            <img src={props.icon} id={props.idImgName} className={styles.clBotaoImg}  alt="" />
                        </div>
                    </button>
                </form>
        </div>
    )
}

export default BotaoCadastro