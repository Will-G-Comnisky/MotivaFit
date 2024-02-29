import styles from "./BotaoLink.module.css";

function BotaoLinks(props) {
  return (
    <div id={styles.idBotaoLink}>
      {/* ----- Label/Nome do Botão ----- */}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        id={props.idText}
        className={styles.clBotaoName}
      >
        {props.nome}
      </a>
      {/* ----- Link -----  */}

      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        id={styles.idBotaoBackground}
      >
        {/* ----- Icone do Botão ----- */}
        <img
          src={props.icon}
          id={props.idImgName}
          className={styles.clBotaoImg}
          alt=""
        />
      </a>
    </div>
  );
}

export default BotaoLinks;
