import './App.css';

import BotaoLinks from './conponents/BotaoLink';
import NavBar from './conponents/NavBar';

import meusTreinos from "./assets/meusTreinos.png"
import ranking from "./assets/rankings.png"
import agendamentos from "./assets/agendamento.png"
import financeiro from "./assets/financeiro.png"
import novo from "./assets/novo.png"
import logo from './assets/logo.png'

function App() {
  return (
    <div id="idMain">

      {/* Nav Bar */}
      <div>
        <NavBar logo={logo}
        />
      </div>


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

    </div>
  );
}

export default App;
