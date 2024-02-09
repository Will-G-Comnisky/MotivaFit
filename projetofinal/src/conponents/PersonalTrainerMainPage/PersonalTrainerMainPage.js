import styles from '../PersonalTrainerMainPage/PersonalTrainerMainPage.module.css'


// ----- Components -----
import BotaoLinks from '../BotaoLink/BotaoLink';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import CardAluno from '../CardAluno/CardAluno';

// ----- Imagens Temporarias ----- 
// -- Logo --
import logo from "../../assets/logo.png"
// -- Botoes --
import meusTreinos from "../../assets/meusTreinos.png"
import ranking from "../../assets/rankings.png"
import agendamentos from "../../assets/agendamento.png"
import financeiro from "../../assets/financeiro.png"
import novo from "../../assets/novo.png"
// -- Banner --
import userImg from "../../assets/userImg.png"
// -- Lista Alunos --
import lupa from "../../assets/lupa.png"
import filtro from "../../assets/filtro.png"

// ----- Variaveis Temporarias -----
// --- User Info Resumo ---
var userName = "Bruno Enghi"
var trainName = "Supino Invertido Colateral 4"
var msgBom
var userRanking = "Ouro"
var numMetaConcluida = 1;
// --- Aluno List

const alunoList = [
{
    alunoName: "João Pedro",
    alunoTrain: "Dorsal Frontal 2"
},
{
    alunoName: "Pedro",
    alunoTrain: "Dorsal Costal 3"
}
]


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

function PersonalTrainerMainPage(props){
    return(
        <div id={styles.idMain} onLoad={msgHoraDoDia()}> 

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

      <div id={styles.idBotoesPaginaPrincipal}>
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
      <div id={styles.idCadastrarAluno}>
        <BotaoLinks nome ="Cadastrar Aluno"
                    icon ={novo}
                    link = "#"
        />
      </div>

        <div id={styles.idListaAluno}>

            <div id={styles.idAlunosNavBar}>

                {/* ----- Barra de Pesquisa ----- */}
                <div id={styles.idAlunosBarraDePesquisa}>
                    {/* --- Botão com a lupa --- */}
                    <div id={styles.idAlunosPesquisar}>
                        <button id={styles.idAlunosPesquisarButton}>
                            <img id={styles.idAlunosPesquisarImg} src={lupa} alt="" />
                        </button>
                    </div>

                    {/* --- Input do Texto --- */}
                    <div id={styles.idAlunoPesquisarText}>
                        <input id={styles.idAlunoPesquisarInput} type="text" placeholder="Pesquisar..."/>
                    </div>
                </div>  

                {/* ----- Filtro ou Ordenar ----- */}
                <div id={styles.idAlunosFiltro}>
                    <div id={styles.idButtonBackground}>
                        <img id={styles.idAlunoFiltroImg}src={filtro} alt="" />
                    </div>
                </div>
            </div>

            <CardAluno  alunoImg = {userImg}
                        alunoName = {alunoList[0].alunoName}
                        alunoTrain = {alunoList[0].alunoTrain}
            
            />
            <CardAluno  alunoImg = {userImg}
                        alunoName = {alunoList[1].alunoName}
                        alunoTrain = {alunoList[1].alunoTrain}
            
            />
        </div>



    </div>
    )
}

export default PersonalTrainerMainPage
