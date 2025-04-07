import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
