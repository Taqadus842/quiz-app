import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, score, totalQuestions, questions } = location.state || {};

  const handleReview = () => {
    navigate('/review', { state: { questions: questions, score: score } });
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="result-page">
      <div className="result-container">
        <h1>Congratulations, {name}!</h1>
        <p>Your Score: {score+1} out of {totalQuestions}</p>
        <button className="review-button" onClick={handleReview}>Review Answers</button>
        <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default ResultPage;
