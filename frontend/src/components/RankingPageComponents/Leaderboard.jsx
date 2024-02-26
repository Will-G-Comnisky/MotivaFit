import trophy from '../../assets/rankingEDesafios.png'
import profileWill from '../../assets/william.png'
import imgAluno2 from '../../assets/Pictures/bruno.jpeg'
import imgAluno3 from '../../assets/Pictures/edson.jpeg'
import imgAluno4 from '../../assets/Pictures/marcus.jpeg'
import imgAluno5 from '../../assets/Pictures/mario.jpeg'
import imgAluno6 from '../../assets/Pictures/joniclei.jpeg'
import imgUser from '../../assets/Pictures/user.png'
import Aluno from './Aluno'

const Leaderboard = () => {
  return (
    <div className="mt-20 font-mono text-lg text-white">
      <h2 className="text-2xl font-bold mb-2 text-center flex justify-evenly pt-2 rounded-lg h-12 bg-purple-600 uppercase border-2 border-black">RANKING</h2>
      <div className="grid grid-cols-4 mt-8 gap-4 bg-slate-900">
        <div className="col-span-1 flex items-center ml-8">
          <div>
            <span className="font-bold uppercase">Usuário(a)</span>
          </div>
        </div>
        <div className="col-span-1 font-bold uppercase">Professor(a)</div>
        <div className="col-span-1 font-bold uppercase">Nível</div>
        <div className="col-span-1 font-bold uppercase ml-8">Experiência</div>

        
        <Aluno profileImg= {profileWill}
        name= 'William'
        trainer= 'Allan'
        level= '4'
        exp= '10' />

        <Aluno profileImg= {imgAluno5}
        name= 'Mario'
        trainer= 'Bruna'
        level= '3'
        exp= '70' />

        <Aluno profileImg= {imgAluno6}
        name= 'Joniclei'
        trainer= 'Allan'
        level= '2'
        exp= '20' />

        <Aluno profileImg= {imgAluno4}
        name= 'Marcus'
        trainer= 'Ivan'
        level= '1'
        exp= '50' />

        <Aluno profileImg= {imgAluno2}
        name= 'Bruno'
        trainer= 'Allan'
        level= '1'
        exp= '90' />

        <Aluno profileImg= {imgUser}
        name= 'Fulano'
        trainer= 'Ivan'
        level= '1'
        exp= '40' />

        <Aluno profileImg= {imgUser}
        name= 'Bruno'
        trainer= 'Bruna'
        level= '1'
        exp= '30' />

      </div>
    </div>
  );
};

export default Leaderboard;
