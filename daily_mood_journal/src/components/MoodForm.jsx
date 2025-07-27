import { useState } from 'react';

const MoodForm = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMood = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      mood,
      note
    };

    const existing = JSON.parse(localStorage.getItem('moods')) || [];
    existing.push(newMood);
    localStorage.setItem('moods', JSON.stringify(existing));

    setMood('');
    setNote('');
    alert('Mood added!');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Mood</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value="">Select Mood</option>
        <option value="Happy">😊 Happy</option>
        <option value="Sad">😢 Sad</option>
        <option value="Angry">😠 Angry</option>
        <option value="Neutral">😐 Neutral</option>
        <option value="Stressed">😫 Stressed</option>
        <option value="Tired">😴 Tired</option>
      </select>

      <label>Note</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a short note..."
        required
      ></textarea>

      <button type="submit" className="btn">Save Mood</button>
    </form>
  );
};

export default MoodForm;
