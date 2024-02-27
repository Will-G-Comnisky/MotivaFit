

import React from 'react';
import styles from "./RankingPage.module.css"
import NavBar from '../../components/NavBar/NavBar';
// import Goals from './components/Goals';
import Achievements from '../../components/RankingPageComponents/Achievements';
import Leaderboard from '../../components/RankingPageComponents/Leaderboard';
import CreateGoals from '../../components/RankingPageComponents/CreateGoals/CreateGoals'
import ListGoals from '../../components/RankingPageComponents/ListGoals';
import GoalsSection from '../../components/RankingPageComponents/GoalsSection';
import { useState } from 'react';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function RankingPage() {
  const [goals, setGoals] = useState([]);

  console.log('goals', goals);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) {
      setGoals(storedGoals);
    }
  }, []);
  

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App bg-gray-900 w-screen h-screen flex flex-col gap-16 text-slate-50 antialiased">
      <Toaster />
      <div>
        <NavBar />
        <div className="flex m-5 justify-evenly">
          <CreateGoals goals={goals} setGoals={setGoals} />
          <ListGoals goals={goals} setGoals={setGoals}/>
          <Achievements />
        </div>
        <Leaderboard />

      </div>
    </div>
    </DndProvider>
  );
}

export default RankingPage;
