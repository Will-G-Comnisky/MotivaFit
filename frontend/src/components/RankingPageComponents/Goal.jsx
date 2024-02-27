import React from "react";
import GoalsSection from "./GoalsSection";
import ListGoals from "./ListGoals";
import  toast  from "react-hot-toast";
import { useDrag } from 'react-dnd'

const Goal = ({goal, goals, setGoals}) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'goal', // Tipo do item que será arrastado
    item: {id: goal.id}, // Especificação do item que está sendo interagido
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleDelete = (id) => {
    // Todos os desafios que não sejam iguais ao ID do parâmetro, serão filteredGoals, assim sendo excluidos da lista de desafios
    const filteredGoals = goals.filter(g => g.id !== id); 

    // É necessário atualizar o LocalStorage para que armazene a lista com os desafios que já foram removidos
    localStorage.setItem('goals', JSON.stringify(filteredGoals));

    setGoals(filteredGoals);

    toast('Desafio removido', {icon: '🗑'})
  }

  return (
    <div ref={drag} // Referenciado o elemento que será arrastado
      className={`relative text-black bg-slate-200 p-4 mt-4 shadow-md rounded cursor-grab hover:ring-2 hover:ring-fuchsia-800 focus-visible:ring-4 focus-visible:ring-blue-600 hover:scale-110 transition duration-300 outline-none ${isDragging ? "opacity-25" : "opacity-100"} `}>
        <p>{goal.name}</p>
        <button className="absolute bottom-2 right-1 text-black hover:scale-90 transition duration-300 hover:text-white" onClick={() => handleDelete(goal.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
    </div>
  )
}

export default Goal