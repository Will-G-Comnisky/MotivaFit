import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
// import Goals from './components/Goals';
import Achievements from './components/Achievements';
import Leaderboard from './components/leaderboard/Leaderboard';
import CreateGoals from './components/CreateGoals'
import ListGoals from './components/ListGoals';
import GoalsSection from './components/GoalsSection';
import { useState } from 'react';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
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

export default App;
