import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Circuit from './Pages/Circuit/Circuit';
import Team from './Pages/Team/Team';
import Pilote from './Pages/Pilote/Pilote';
import OnBoard from './Pages/OnBoard/OnBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circuit" element={<Circuit />} />
        <Route path='/team' element={<Team />} />
        <Route path="/pilote" element={<Pilote />} />
        <Route path='/onboard' element={<OnBoard />} />
      </Routes>
    </Router>
  );
};

export default App;