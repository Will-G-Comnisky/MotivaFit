import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const CreateGoals = ({ goals, setGoals }) => {

  const [goal, setGoal] = useState({
    id: '',
    name: '',
    status: 'challenges' // can also be in achievements
  })
  console.log(goal);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (goal.name.length < 3) return toast.error('Um desafio deve conter mais que 3 caracteres')

    if (goal.name.length > 100) return toast.error('Um desafio deve conter no máximo 100 caracteres')

    setGoals((prev) => {
      const list = [...prev, goal];

      localStorage.setItem('goals', JSON.stringify(list));
      return list;
    });

    toast.success('Desafio criado!')

    setGoal({
      id: '',
      name: '',
      status: 'challenges' // can also be in achievements
    })
  };


  return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-96'>
        <input type="text" 
        placeholder='Inserir um desafio'
        className='text-black border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-96 px-1'
        value= {goal.name}
        onChange={(e) => setGoal({...goal, id: uuidv4(), name: e.target.value})}/>
        <button className='relative flex h-[40px] w-40 items-center justify-center overflow-hidden bg-fuchsia-800 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px] mt-2 jus rounded'>
        <span className="relative z-10">Criar desafio</span>
        </button>
      </form>

  );
};



/*
const Goals = () => {

  return (
    <div className="w-96 col-span-2 mx-30 h-72 rounded-md text-left bg-slate-800 space-y-3 p-5 overflow-hidden relative hover:ring-2 hover:ring-indigo-600 focus-visible:ring-2 focus-visible:ring-blue-300 outline-none m-8 cursor-pointer">
      <h2 className="text-xl font-bold">METAS</h2>
      <div id="checklist">
        <input value="1" name="r" type="checkbox" id="01" />
        <label for="01">Não faltar em nenhum treino agendado durante 15 dias.</label>
        <input value="2" name="r" type="checkbox" id="02" />
        <label for="02">Aumentar em no mínimo 5% carga em todos os exercícios até fim do mês.</label>
        <input value="3" name="r" type="checkbox" id="03" />
        <label for="03">Não faltar em nenhum treino agendado durante 30 dias.</label>
        <input value="4" name="r" type="checkbox" id="04" />
        <label for="04">Não faltar em nenhum treino agendado durante 30 dias.</label>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </div>
  );
};
*/
export default CreateGoals;