import React, { useState, useEffect } from 'react';
import GoalsSection from './GoalsSection';

const ListGoals = ({goals, setGoals}) => {
  
  const [challenges, setChallenges] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Verifica se goals é null, se for, utiliza um array vazio como valor padrão
    const filteredChallenges = goals.filter((goal) => goal.status === 'challenges');
    const filteredAchievements = goals.filter((goal) => goal.status === 'achievements');

    setChallenges(filteredChallenges)
    setAchievements(filteredAchievements)
  }, [goals]);
 
  
  const statuses = ['challenges', 'achievements']

  return <div className='flex gap-16'>
    {statuses.map((status, index) => < GoalsSection
      key={index} 
      status = {status} 
      goals = {goals} 
      setGoals = {setGoals} 
      challenges = {challenges} 
      achievements = {achievements} />)}
  </div>
};

export default ListGoals;
