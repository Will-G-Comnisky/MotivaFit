import React, { useState } from "react";
import styles from "../CardMeusTreinos/CardMeusTreinos.module.css";
import treinoImg from "../../assets/gym.png";
import info from "../../assets/infoImg.png";
import Modal from "react-modal";
import { customStyles } from "./cardMeusTreinosModal"; // Importando customStyles

// Certifique-se de vincular o aplicativo raiz
// Isso é necessário para a acessibilidade do modal
Modal.setAppElement("#root");

function CardMeusTreinos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInfoClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

        <div onClick={handleInfoClick}>
          <img id={styles.idImg} src={info} alt="" />
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Treino Details"
        >
          {/* Renderize os exercícios aqui */}
          {props.exercicios.map((exercicio, index) => (
            <p key={index}>{exercicio}</p>
          ))}
        </Modal>
      </div>
    </div>
  );
}

export default CardMeusTreinos;
