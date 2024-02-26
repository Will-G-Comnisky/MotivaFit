import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import LoginProfessor from './components/LoginProfessor/LoginProfessor';
import LoginAluno from './components/LoginAluno/LoginAluno';
import PersonalTrainerMainPage from './components/PersonalTrainerMainPage/PersonalTrainerMainPage';
import AlunoMainPage from './components/AlunoMainPage/AlunoMainPage';
import MeusTreinosPage from './components/MeusTreinosPage/MeusTreinosPage'
import FinanceiroPage from './components/FinanceiroPage/FinanceiroPage'
import LogOffPage from './components/LogOffPage/LogOffPage'
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LoginProfessor" element={<LoginProfessor />} />
        <Route path="/LoginAluno" element={<LoginAluno />} />
        <Route
          path="/PersonalTrainerMainPage"
          element={<PersonalTrainerMainPage />}
        />
        <Route path="/AlunoMainPAge" element={<AlunoMainPage />} />
        <Route path="/MeusTreinosPage" element={<MeusTreinosPage />} />
        <Route path="/FinanceiroPage" element={<FinanceiroPage />} />
        <Route path="/LogOffPage" element={<LogOffPage />} />
        <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
