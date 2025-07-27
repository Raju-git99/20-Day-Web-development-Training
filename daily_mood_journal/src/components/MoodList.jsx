import { useEffect, useState } from 'react';

const MoodList = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem('moods')) || [];
    setMoods(storedMoods);
  }, []);

  const handleDelete = (id) => {
    const updatedMoods = moods.filter((mood) => mood.id !== id);
    setMoods(updatedMoods);
    localStorage.setItem('moods', JSON.stringify(updatedMoods));
  };

  if (moods.length === 0) return <p>No mood entries yet.</p>;

  return (
    <div className="mood-list">
      {moods.map((entry) => (
        <div key={entry.id} className="mood-card">
          <h3>{entry.date}</h3>
          <p><strong>Mood:</strong> {entry.mood}</p>
          <p><strong>Note:</strong> {entry.note}</p>
          <button className="btn delete-btn" onClick={() => handleDelete(entry.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MoodList;
