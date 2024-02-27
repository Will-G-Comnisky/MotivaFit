import styles from './BarraDePesquisa.module.css'

function BarraDePesquisa(props){
    return(
        
        <div id={styles.idAlunosBarraDePesquisa}>
            {/* --- Botão com a lupa --- */}
            <div id={styles.idAlunosPesquisar}>
                <button id={styles.idAlunosPesquisarButton}>
                <img id={styles.idAlunosPesquisarImg} src={props.lupaImg} alt="" />
                </button>
            </div>

            {/* --- Input do Texto --- */}
            <div id={styles.idAlunoPesquisarText}>
                <input id={styles.idAlunoPesquisarInput} type="text" placeholder="Pesquisar..."/>
            </div>
        </div>
        
    )
}

export default BarraDePesquisa