import styles from "../AlunoMainPage/AlunoMainPage.module.css";

// ----- Components -----
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import CardTreinos from "../CardTreinos/CardTreinos";

import TreinosList from "../../data/TreinosList";

// -- Logo --
import logo from "../../assets/logo.png";

// -- Banner --
import workoutImg from "../../assets/gym.png";
import alunoImg from "../../assets/Aluno.png";

// --- User Info Resumo ---
var userName = "What?!";
var msgBom;
var userRanking = "Ouro";
var numMetaConcluida = 1;

const treinosArray = Object.values(TreinosList).flatMap(Object.values);

// Função msg de Bom Dia / Boa Tarde / Boa Noite
function msgHoraDoDia() {
  const periodos = {
    "Bom Dia": [5, 12],
    "Boa Tarde": [12, 18],
    "Boa Noite": [18, 5],
  };

  const agora = new Date().getHours();

  for (const periodo in periodos) {
    if (agora >= periodos[periodo][0] && agora < periodos[periodo][1]) {
      msgBom = periodo;
    }
  }
}

const Treinos = () => (
  <>
    {treinosArray.map((treino) => (
      <div key={treino.workoutName}>
        <CardTreinos
          workoutName={treino.workoutName}
          workoutGroup={treino.workoutGroup}
          workoutImg={workoutImg}
          exercicios={treino.exercicios}
        />
      </div>
    ))}
  </>
);

function AlunoMainPage() {
  return (
    <div id={styles.idMain} onLoad={msgHoraDoDia()}>
      {/* ----- Nav Bar ----- */}
      <NavBar logo={logo} />

      {/* ----- Banner ----- */}
      <Banner
        userImg={alunoImg}
        msgBom={msgBom}
        userName={userName}
        numMetaConcluida={numMetaConcluida}
        userRanking={userRanking}
      />

      <div id={styles.idListaTreinos}>
        <Treinos TreinosList={TreinosList} />
      </div>
    </div>
  );
}

export default AlunoMainPage;
