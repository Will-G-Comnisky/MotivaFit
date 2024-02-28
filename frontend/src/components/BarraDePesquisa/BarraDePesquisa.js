import React, { useState } from "react";
import styles from "./BarraDePesquisa.module.css";
import { alunoList } from "../../data/alunoList";

function BarraDePesquisa(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Filtrar a lista de alunos com base no termo de pesquisa
    const filteredAlunos = alunoList.filter(
      (aluno) =>
        aluno &&
        aluno.alunoName &&
        aluno.alunoName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredAlunos);
    setShowResults(true);
  };

  // Função para fechar o modal quando clicado fora do conteúdo
  const handleClose = (event) => {
    if (event.target.id === styles.idModal) {
      setShowResults(false);
    }
  };

  return (
    <div id={styles.idAlunosBarraDePesquisa}>
      {/* --- Botão com a lupa --- */}
      <div id={styles.idAlunosPesquisar}>
        <button id={styles.idAlunosPesquisarButton} onClick={handleSearch}>
          <img id={styles.idAlunosPesquisarImg} src={props.lupaImg} alt="" />
        </button>
      </div>

      {/* --- Input do Texto --- */}
      <div id={styles.idAlunoPesquisarText}>
        <input
          id={styles.idAlunoPesquisarInput}
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      {/* --- Modal de Resultados de Pesquisa --- */}
      {showResults && (
        <div id={styles.idModal} onClick={handleClose}>
          <div>
            <h2>Resultados da Pesquisa</h2>
            {searchResults.map((aluno, index) => (
              <div key={index}>
                <p>Nome: {aluno.alunoName}</p>
                <p>Treino: {aluno.alunoTrain}</p>
                <img src={aluno.alunoImg} alt="Imagem do Aluno" />
              </div>
            ))}
            <button onClick={() => setShowResults(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarraDePesquisa;
