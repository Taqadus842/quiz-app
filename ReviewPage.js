import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReviewPage.css';

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, score } = location.state || {};

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="review-page">
      <div className="review-container">
        <h1>Review Your Answers</h1>
        <p>Your Score: {score}</p>
        <div className="questions-list">
          {questions.map((question, index) => (
            <div key={index} className="question-item">
              <h2>Question {index + 1}</h2>
              <p>{question.questionText}</p>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className={optionIndex === question.correctOptionIndex ? 'correct-answer' : 'incorrect-answer'}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default ReviewPage;
