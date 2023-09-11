import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import AgentDetails from './pages/AgentDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <h1 className='title-logo'>Valorant Hub</h1>
          <nav className="navbar">
            <Link to="/"><h1 className="home-text">Home</h1></Link>
            <Link to="/agents"><h1 className="agents-text">Agents</h1></Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
