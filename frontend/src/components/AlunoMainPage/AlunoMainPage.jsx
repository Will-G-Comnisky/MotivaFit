import styles from '../AlunoMainPage/AlunoMainPage.module.css'

// ----- Components -----
import NavBar from '../NavBar/NavBar';
import Banner from '../BannerAluno/BannerAluno';
import CardTreinos from '../CardTreinos/CardTreinos';
import BotaoLink from '../BotaoLink/BotaoLink'

import {TreinosList} from "../../data/TreinosList";

//Botao
import ranking from "../../assets/rankingEDesafios.png"
import agendamentos from "../../assets/agendamento.png"
import financeiro from "../../assets/financeiro.png"

// -- Logo --
import logo from "../../assets/logo.png"

// -- Banner --
import workoutImg from "../../assets/gym.png"
import alunoImg from "../../assets/Aluno.png"

// --- User Info Resumo ---
var userName = "What?!"
var msgBom
var userRanking = "Ouro"
var numMetaConcluida = 1;

function AlunoMainPage(props){
// Função msg de Bom Dia / Boa Tarde / Boa Noite
function msgHoraDoDia(){
    const periodos = {
      'Bom Dia': [5, 12],
      'Boa Tarde': [12, 18],
      'Boa Noite': [18, 5]
    }
    
    const agora = new Date().getHours();
    
    for (const periodo in periodos) {
      if (agora >= periodos[periodo][0] && agora < periodos[periodo][1]) {
        msgBom = periodo;
      }
    }
}

const Treinos = ({TreinosList}) => (
  <>
    {TreinosList.map(treino => (
      <div key={treino.id}>
        <CardTreinos  workoutName={treino.workoutName}
                    workoutGroup={treino.workoutGroup}
                    workoutImg={workoutImg}
        />
      </div>
    ))}
  </>
); 

  return(
    <div id={styles.idMain} onLoad={msgHoraDoDia()}> 

      {/* ----- Nav Bar ----- */}
        <NavBar logo={logo}
        />
      
      {/* ----- Banner ----- */}
      <Banner userImg = {alunoImg}
              msgBom = {msgBom}
              userName = {userName}
              numMetaConcluida = {numMetaConcluida}
              userRanking = {userRanking}
      />

      <div className={styles.clDivBotoes}>
        <BotaoLink nome="Agendamentos"
                    icon={agendamentos}
                    link='https://workspace.google.com/intl/pt-BR/products/calendar/'
        />
        <BotaoLink nome="Financeiro"
                    icon={financeiro}
                    link='../../components/FinanceiroPage/FinanceiroPage'
        />
        <BotaoLink nome="Ranking"
                    icon={ranking}
                    link='https://workspace.google.com/intl/pt-BR/products/calendar/'
        />
      </div>


      <div id={styles.idListaTreinos}>
        <Treinos TreinosList={TreinosList}/>
      </div>
    </div>
  )
}


export default AlunoMainPage
