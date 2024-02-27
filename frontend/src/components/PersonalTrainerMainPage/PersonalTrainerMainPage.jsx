import styles from "../PersonalTrainerMainPage/PersonalTrainerMainPage.module.css";

import React, { useState } from "react";

// ----- Components -----
import BotaoLinks from "../BotaoLink/BotaoLink";
import BotaoCadastro from '../BotaoCadastro/BotaoCadastro';
import BotaoNav from '../BotaoNav/BotaoNav'
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import CardAluno from "../CardAluno/CardAluno";
import BarraDePesquisa from "../BarraDePesquisa/BarraDePesquisa";

// ----- Data -----
import { alunoList } from "../../data/alunoList";

// ----- Imagens Temporarias -----
// -- Logo --
import logo from "../../assets/logo.png";

// -- Botoes --
import meusTreinos from "../../assets/meusTreinos.png"
import ranking from "../../assets/rankingEDesafios.png"
import agendamentos from "../../assets/agendamento.png"
import financeiro from "../../assets/financeiro.png"
import novo from "../../assets/novo.png"
import botaoX from "../../assets/BotaoX.png"
// -- Banner --

// -- Lista Alunos --
import lupa from "../../assets/lupa.png";
import filtro from "../../assets/filtro.png";
// -- Treinador --
import Treinador from '../../assets/Pictures/Treinador.png'

// -- Alunos --

// ----- Variaveis Temporarias -----
// --- User Info Resumo ---
var userName = "Treinador";
var msgBom;
var userRanking = "Ouro";
var numMetaConcluida = 1;

function msgHoraDoDia() {
  const periodos = {
    "Bom Dia": [0, 12],
    "Boa Tarde": [12, 18],
    "Boa Noite": [18, 24],
  };

  const agora = new Date().getHours();

  for (const periodo in periodos) {
    if (agora >= periodos[periodo][0] && agora < periodos[periodo][1]) {
      msgBom = periodo;
    }
  }
}

const Alunos = ({ alunoList }) => (
  <>
    {alunoList.map((aluno) => (
      <div key={aluno.id}>
        <CardAluno
          alunoName={aluno.alunoName}
          alunoTrain={aluno.alunoTrain}
          alunoImg={aluno.alunoImg}
        />
      </div>
    ))}
  </>
);

function PersonalTrainerMainPage(props) {
  // Função msg de Bom Dia / Boa Tarde / Boa Noite
  const [showTerms, setShowTerms] = useState(false);
  const HandleCadastro = (event) => {
    event.preventDefault();
    setShowTerms(true);
  };

  return (
    <div id={styles.idMain} onLoad={msgHoraDoDia()}>
      {/* ----- Nav Bar ----- */}
      <NavBar logo={logo} />

      {/* ----- Banner ----- */}
      <Banner
        userImg={Treinador}
        msgBom={msgBom}
        userName={userName}
        numMetaConcluida={numMetaConcluida}
        userRanking={userRanking}
      />

      <div id={styles.idBotoesPaginaPrincipal}>
        {/* Botao Novo treino */}

        <BotaoNav nome = "Meus Treinos"
                    icon = {meusTreinos}
                    link = "/MeusTreinosPage"
        />

        {/* Botao Meus treinos */}
        <BotaoNav nome ="Ranking"
                    icon ={ranking}
                    link = "/RankingPage"

        />

        {/* Botao Agendamentos */}
         <BotaoLinks
          nome="Agendamentos"
          icon={agendamentos}
          link="https://workspace.google.com/intl/pt-BR/products/calendar/"
        /> 

        {/* Botao Financeiro */}
        <BotaoNav
          nome="Financeiro"
          icon={financeiro}
          link="../../FinanceiroPage"
        />
      </div>

      {/* Botao Cadastrar Novo Aluno */}
      <div id={styles.idCadastrarAluno}>
        <BotaoCadastro nome ="Cadastrar Aluno"
                    icon ={novo}
                    link = "#"
                    buttonFunction={HandleCadastro}
        />
      </div>
      

    {showTerms && (
      <div id={styles.idCadastroAlnuo} className={styles.clCreateAccountContainer}>
        <form>
        <div id={styles.idCloseNav}>
          <div id={styles.idFiller}></div>
          <button id={styles.idCloseButton} onClick={() => setShowTerms(false)}><img src={botaoX}/></button>
        </div>
          <h2>Cadastre um Aluno</h2>
          <input type="text" placeholder="Nome Completo" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="CPF" />
          <select>
            <option value="">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <label>Data de Nascimento:</label>
          <input type="date" />
          <input type="submit" value="Cadastrar Aluno" />
      
        </form>
      </div>
    )}


      <div id={styles.idListaAluno}>
        <div id={styles.idAlunosNavBar}>
          {/* ----- Barra de Pesquisa ----- */}
          <BarraDePesquisa lupaImg={lupa} />

          {/* ----- Filtro ou Ordenar ----- */}
          <div id={styles.idAlunosFiltro}>
            <div id={styles.idButtonBackground}>
              <img id={styles.idAlunoFiltroImg} src={filtro} alt="" />
            </div>
          </div>
        </div>

        <Alunos alunoList={alunoList} />
      </div>
    </div>
  );
}

export default PersonalTrainerMainPage;
