import React from 'react';
import MoodList from '../components/MoodList';

const ViewMoods = () => {
  return (
    <div className="page">
      <h1>Your Mood Entries</h1>
      <MoodList />
    </div>
  );
};

export default ViewMoods;
