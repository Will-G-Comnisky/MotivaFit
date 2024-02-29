import React, { useState } from "react";
import styles from "../MeusTreinosPage/MeusTreinosPage.css";

// ----- Components -----
import CardMeusTreinos from "../CardMeusTreinos/CardMeusTreinos";
import NavBar from "../NavBar/NavBar";

import TreinosList from "../../data/TreinosList"; // Importando TreinosList

// -- Logo --
import logo from "../../assets/logo.png";

// -- Banner --
import workoutImg from "../../assets/Aluno.png";
// -- Lista Alunos --

// ----- Variaveis Temporarias -----

// Transforma o objeto aninhado em um array de objetos
const treinosArray = Object.values(TreinosList).flatMap(Object.values);

const Treinos = () => {
  const [selectedTreino, setSelectedTreino] = useState(null);

  const handleTreinoClick = (workoutName) => {
    setSelectedTreino(workoutName === selectedTreino ? null : workoutName);
  };

  return (
    <>
      {treinosArray.map((treino) => (
        <div key={treino.workoutName}>
          <CardMeusTreinos
            workoutName={treino.workoutName}
            workoutGroup={treino.workoutGroup}
            workoutImg={workoutImg}
            exercicios={treino.exercicios}
            onTreinoClick={() => handleTreinoClick(treino.workoutName)}
          />
        </div>
      ))}
    </>
  );
};

function MeusTreinosPage(props) {
  return (
    <div id={styles.idMain}>
      {/* ----- Nav Bar ----- */}
      <NavBar logo={logo} />

      {/* Passando TreinosList importado para o componente Treinos */}
      <Treinos />
    </div>
  );
}

export default MeusTreinosPage;
