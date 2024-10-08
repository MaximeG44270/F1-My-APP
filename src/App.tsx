import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Circuit from './Pages/Circuit/Circuit';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circuit" element={<Circuit />} />
      </Routes>
    </Router>
  );
};

export default App;