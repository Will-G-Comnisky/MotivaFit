import styles from "../CardTreinos/CardTreinos.module.css";
import { useState } from 'react'

import treinoImg from "../../assets/gym.png";
import seta from '../../assets/setaTreinos.png'

function CardTreinos(props) {

  const [showList, setShowList] = useState(false)

  const ExercicioList = ({ExercicioTreino}) => (
    <>
    {props.exercicios.map((exercicio, index) => (
      <li key={index}><span id={styles.idExercicio}>{exercicio}</span></li>
    ))}
    </>
  )


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
      
        <button onClick={() =>{setShowList(!showList)}} 
                id={styles.idAlunoImgBackground}
        >
          <img  id={styles.idSetaIcon} 
                className={showList ? styles.clOpenedImg : styles.clClosedImg} 
                src={seta} 
                alt="" 
          />
        </button>
      </div>

      <div id={styles.idAtividadesList} >
        <ul className={showList ? styles.clOpened : ''}>
          <ExercicioList/>
        </ul>
      </div>
    </div>

    

  );
}

export default CardTreinos;
