import styles from './BotaoLink.module.css'

function BotaoLinks(props){
    return(
        <div id={styles.idBotaoLink}>
            {/* ----- Label/Nome do Botão ----- */}
            <a href={props.link} id={styles.idBotaoName}>{props.nome}</a>
            {/* ----- Link -----  */}
            <a href={props.link}>
                <div id={styles.idBotaoBackground}>
                    {/* ----- Icone do Botão ----- */}
                    <img src={props.icon} id={props.idName} className={styles.clBotaoImg}  alt="" />
                </div>
            </a>
        </div>
    )
}

export default BotaoLinks