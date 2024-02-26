import styles from '../CardFinanceiro/CardFinanceiro.module.css'

import infoImg from '../../assets/infoImg.png'

function CardFinanceiro(props){
    return(
        <div>
            <div id={styles.idAlunoCard} >

                {/* ----- Aluno Img ----- */}
                <div id={styles.idAlunoImgBackground}>
                    <img src={props.alunoImg} id={styles.idAlunoImg} alt="" />
                </div>

                {/* ----- Aluno Nome ----- */}
                <div id={styles.idAlunoNome}>
                    <span>{props.alunoName}</span>
                </div>

                {/* ----- Treino do Aluno ----- */}
                <div id={styles.idAlunoTreino}>
                    <span>Treino Atual: {props.alunoTrain}</span>
                </div>

                {/* ----- Aluno Info ----- */}
                <div id={styles.idAlunoInfo}>
                    <div id={styles.idInfoIconBackground}>
                        <img src={infoImg} id={styles.idInfoIcon} alt="" />
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default CardFinanceiro