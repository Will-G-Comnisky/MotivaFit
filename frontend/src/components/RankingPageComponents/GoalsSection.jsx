import React from "react";
import ListGoals from "./ListGoals";
import SectionHeader from "./SectionHeader";
import Goal from "./Goal";
import { useDrag, useDrop } from 'react-dnd';
import  toast  from "react-hot-toast";

const GoalsSection = ({status, goals, setGoals, challenges, achievements}) => {

  const [{ isOver }, drop] = useDrop(() => ({  // isOver, drop e useDrop, pois useDrag está sendo usado em "Goal.jsx", pois está sendo arrastado de lá para cá, então aqui usa-se useDrop
    accept: 'goal', // Tipo do item que será arrastado
    drop: (item) => addItemToSection(item.id), // Especificação do item que está sendo interagido
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  let text = 'desafios';
  let bg = 'bg-fuchsia-800';
  let goalsToMap = challenges;

  if(status === 'achievements') {
    text = 'conquistas';
    bg = 'bg-blue-600';
    goalsToMap = achievements;
  } 

  const addItemToSection = (id) => { //Função criada para lidar com DnD
    // console.log('dropped', id, status);  Ao arrastar e dropar em outra seção, nos fornece o ID daquele goal e o nome da seção que foi dropado
    setGoals((prev) => {
      const modifiedGoals = prev.map((g) => { // Com isso têm-se uma nova lista de goals/desafios
        if(g.id === id) {
          return {...g, status: status}
        }

        return g;
      })

      localStorage.setItem('goals', JSON.stringify(modifiedGoals))
      toast('Parabéns! Você superou mais um desafio!', {icon: '💪'})

      return modifiedGoals;
    })
  }

  return (
    <div ref={drop} // Referenciar como componente onde será largado o que foi arrastado
    className={`w-80 ${isOver ? "bg-slate-800 rounded-md p-2 scale-95 transition duration-500 opacity-70" : ""}`}>
      <SectionHeader text = {text} 
      bg = {bg} 
      length = {goalsToMap.length} />
      {goalsToMap.length > 0 && goalsToMap.map((goal) => 
      <Goal 
      key={goal.id}
      goal = {goal}
      goals = {goals}
      setGoals = {setGoals} />)}
    </div>
  ) 
};

export default GoalsSection
