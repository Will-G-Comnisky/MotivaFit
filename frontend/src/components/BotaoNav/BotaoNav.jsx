import styles from './BotaoNav.module.css'
import { useNavigate } from 'react-router-dom';

function BotaoLinks(props){

    const navigate = useNavigate()

    const Navegar = (e) => {
        navigate(props.link)
    }

    return(
        <div id={styles.idBotaoLink}>
            {/* ----- Label/Nome do Botão ----- */}
            <button onClick={Navegar} id={props.idText} className={styles.clBotaoName}>{props.nome}</button>
            {/* ----- Link -----  */}
            
            <button onClick={Navegar}>
                <div id={styles.idBotaoBackground}>
                    {/* ----- Icone do Botão ----- */}
                    <img src={props.icon} id={props.idImgName} className={styles.clBotaoImg}  alt="" />
                </div>
            </button>
               
        </div>
    )
}

export default BotaoLinks