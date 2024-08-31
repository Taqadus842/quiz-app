import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [questions] = useState([
    {
      questionText: "Which language is known as the language of the web?",
      options: ["JavaScript", "Python", "Java", "C++"],
      correctOptionIndex: 0
    },
    {
      questionText: "Which of the following is a JavaScript framework?",
      options: ["React", "Django", "Laravel", "Flask"],
      correctOptionIndex: 0
    },
    {
      questionText: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<script>", "<link>", "<css>"],
      correctOptionIndex: 0
    },
    {
      questionText: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
      correctOptionIndex: 0
    },
    {
      questionText: "In CSS, how do you select an element with id 'header'?",
      options: ["#header", ".header", "header", "header#header"],
      correctOptionIndex: 0
    }
  ]);

  const navigate = useNavigate();

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestionIndex].correctOptionIndex) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        navigate('/result', {
          state: {
            name: "User",
            score: score,
            totalQuestions: questions.length,
            questions: questions
          }
        });
      }
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="question">{question.questionText}</div>
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === index ? (index === question.correctOptionIndex ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </button>
          ))}
        </div>
        <button className="next-button" onClick={handleNext}>
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
