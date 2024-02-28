import styles from "../CardTreinos/CardTreinos.module.css";
import treinoImg from "../../assets/gym.png";

function CardTreinos(props) {
  return (
    <div>
      <div id={styles.idTreinoCard}>
        {/* ----- Treino Img ----- */}
        <div id={styles.idAlunoImgBackground}>
          <img src={treinoImg} id={styles.idTreinoImg} alt="" />
        </div>

        {/* ----- Aluno Nome ----- */}
        <div id={styles.idTreinoNome}>
          <span>{props.workoutName}</span>
        </div>

        {/* ----- Treino do Aluno ----- */}
        <div id={styles.idGrupoTreino}>
          <span>{props.workoutGroup}</span>
        </div>
      </div>
    </div>
  );
}

export default CardTreinos;
