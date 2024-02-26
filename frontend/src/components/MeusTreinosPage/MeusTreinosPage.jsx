import styles from '../MeusTreinosPage/MeusTreinosPage.css'

// ----- Components -----
import NavBar from '../NavBar/NavBar';
import CardTreinos from '../CardTreinos/CardTreinos';
import BotaoLinks from '../BotaoLink/BotaoLink';

import {TreinosList} from "../../data/TreinosList";

// -- Logo --
import logo from "../../assets/logo.png"
import novo from '../../assets/novo.png'

// -- Banner --
import workoutImg from "../../assets/Aluno.png"
// -- Lista Alunos --

// ----- Variaveis Temporarias -----

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

function MeusTreinosPage(props){
  return(
    <div id={styles.idMain}> 

      {/* ----- Nav Bar ----- */}
        <NavBar logo={logo}
        />

      {/* Botao Cadastrar Novo Treino */}
      
      <BotaoLinks nome ="NovoTreino"
                  icon ={novo}
                  link = "#"
                  idText = "idText"
      />
      <div id={styles.idListaTreinos}>

        <div id={styles.idTreinosNavBar}>

            {/* ----- Ordenar ----- */}
          <div id={styles.idTreinosFiltro}>
            <div id={styles.idButtonBackground}>
            </div>
          </div>
        </div>

        <Treinos TreinosList={TreinosList}/>


      </div>
    </div>
  )
}

export default MeusTreinosPage
