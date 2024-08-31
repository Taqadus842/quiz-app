import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const [name, setName] = useState('');
  const [quizType, setQuizType] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name && quizType) {
      navigate('/quiz', { state: { name, quizType } });
    }
  };

  return (
    <div className="start-page">
      <h1>Start Your Quiz</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={quizType} onChange={(e) => setQuizType(e.target.value)}>
        <option value="">Select a type</option>
        <option value="General Knowledge">General Knowledge</option>
        <option value="Programming">Programming</option>
        {/* Add more quiz types as needed */}
      </select>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
