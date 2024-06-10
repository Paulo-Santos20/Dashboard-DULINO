import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Divider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Municipios from './pages/Municipios';
import CoracaoDeMaria from './pages/CoracaoDeMaria';
import ConceicaoDaFeira from './pages/ConceicaoDaFeira';
import TaboaoDaSerra from './pages/TaboaoDaSerra';
import FeiraDeSantana from './pages/FeiraDeSantana';
import Projetos from './pages/Projetos';
import './App.css';
import { FaBars } from 'react-icons/fa';

const App = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar active={isSidebarActive} setActive={setIsSidebarActive} />
        <button onClick={toggleSidebar} className={`sidebar-toggle-button ${isSidebarActive ? 'active' : ''}`}>
          <FaBars />
        </button>
        <main className={isSidebarActive ? 'active' : ''}>
          <Routes>
            <Route path="/municipios" element={<Municipios />} />
            <Route path="/coracao-de-maria" element={<CoracaoDeMaria />} />
            <Route path="/conceicao-da-feira" element={<ConceicaoDaFeira />} />
            <Route path="/taboao-da-serra" element={<TaboaoDaSerra />} />
            <Route path="/feira-de-santana" element={<FeiraDeSantana />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
