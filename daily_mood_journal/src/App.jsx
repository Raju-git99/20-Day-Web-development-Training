import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMood from './pages/AddMood';
import ViewMoods from './pages/ViewMoods';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <h2>Daily Mood Journal</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/add">Add Mood</Link>
          <Link to="/view">View Moods</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMood />} />
        <Route path="/view" element={<ViewMoods />} />
      </Routes>
    </Router>
  );
};

export default App;
