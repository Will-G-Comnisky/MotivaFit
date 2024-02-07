
function BotaoLinks(props){
    return(
        <div id="idBotaoLink">
            <h2 id="idBotaoName">{props.nome}</h2>
            <a href={props.link}>
                <div id="idBotaoBackground">
                    <img src={props.icon} id={props.idName} className="clBotaoImg"  alt="" />
                </div>
            </a>
        </div>
    )
}

export default BotaoLinks