import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Daily Mood Journal</h1>
      <p>Track how you're feeling each day.</p>
      <Link to="/add" className="btn">Add Mood</Link>
      <Link to="/view" className="btn">View Entries</Link>
    </div>
  );
};

export default Home;
