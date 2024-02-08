import './App.css';

// ----- Components -----
import BotaoLinks from './conponents/BotaoLink/BotaoLink';
import NavBar from './conponents/NavBar/NavBar';
import Banner from './conponents/Banner/Banner';

// ----- Imagens Temporarias ----- 
// -- Logo --
import logo from "./assets/logo.png"
// -- Botoes --
import meusTreinos from "./assets/meusTreinos.png"
import ranking from "./assets/rankings.png"
import agendamentos from "./assets/agendamento.png"
import financeiro from "./assets/financeiro.png"
import novo from "./assets/novo.png"
// Banner
import userImg from "./assets/userImg.png"

// ----- Variaveis Temporarias -----
var userName = "Bruno Enghi"
var trainName = "Supino Invertido Colateral 4"
var msgBom
var userRanking = "Ouro"
var numMetaConcluida = 1;

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


function App() {
  return (
    <div id="idMain" onLoad={msgHoraDoDia()}> 

      {/* ----- Nav Bar ----- */}
      <div>
        <NavBar logo={logo}
        />
      </div>

      {/* ----- Banner ----- */}
      
      <Banner userImg = {userImg}
              msgBom = {msgBom}
              userName = {userName}
              numMetaConcluida = {numMetaConcluida}
              userRanking = {userRanking}
      />

      <div id="idBotoesPaginaPrincipal">
        {/* Botao Novo treino */}
        <BotaoLinks nome = "Meus Treinos"
                    icon = {meusTreinos}
                    link = "#"
        />

        {/* Botao Meus treinos */}
        <BotaoLinks nome ="Ranking"
                    icon ={ranking}
                    link = "#"
                    idName ="idRanking"
        />

        {/* Botao Agendamentos */}
        <BotaoLinks nome ="Agendamentos"
                    icon ={agendamentos}
                    link = "#"
        />

        {/* Botao Financeiro */}
        <BotaoLinks nome ="Financeiro"
                    icon ={financeiro}
                    link = "#"
        />
      </div>

      {/* Botao Cadastrar Novo Aluno */}
      <div id="idCadastrarAluno">
        <BotaoLinks nome ="Cadastrar Aluno"
                    icon ={novo}
                    link = "#"
        />
      </div>

      <div id="idListaAluno">

      </div>



    </div>
  );
}

export default App;
