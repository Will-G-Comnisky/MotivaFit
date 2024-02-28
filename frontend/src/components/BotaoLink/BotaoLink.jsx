import styles from './BotaoLink.module.css'
import { useNavigate } from 'react-router-dom';

function BotaoLinks(props){

    const navigate = useNavigate()

    const Navegar = (e) => {
        navigate(props.link)
    }

    return(
        <div id={styles.idBotaoLink}>
            {/* ----- Label/Nome do Botão ----- */}
            <a href={props.link} id={props.idText} className={styles.clBotaoName}>{props.nome}</a>
            {/* ----- Link -----  */}
            
            <a href={props.link} id={styles.idBotaoBackground}>
                {/* ----- Icone do Botão ----- */}
                <img src={props.icon} id={props.idImgName} className={styles.clBotaoImg}  alt="" />
            </a>
               
        </div>
    )
}

export default BotaoLinks