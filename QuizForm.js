// src/components/QuizForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizForm.css';

const QuizForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [quizType, setQuizType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quizType) {
      alert('Please enter your name and select a quiz type.');
      return;
    }
    navigate('/quiz', {
      state: {
        name: name,
        quizType: quizType,
      },
    });
  };

  return (
    <div className="quiz-form">
      <h1>Start Your Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quizType">Select Quiz Type:</label>
          <select
            id="quizType"
            value={quizType}
            onChange={(e) => setQuizType(e.target.value)}
          >
            <option value="">Select a type</option>
            <option value="general-knowledge">General Knowledge</option>
            <option value="programming">Programming</option>
            {/* Add more quiz types here if needed */}
          </select>
        </div>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default QuizForm;
