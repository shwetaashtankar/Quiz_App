import React, { useState } from 'react';

const Quiz = ({ quiz, onSubmitQuiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmitQuiz(answers);
  };

  if (submitted) {
    return null;
  }

  return (
    <div className="p-4 text-white ">
      <h2 className="text-3xl mb-4">Solved Quiz</h2>
      <h2 className="text-2xl mb-4">Title: {quiz.title}</h2>
      {quiz.questions.map((q, index) => (
        <div key={index} className="mb-4 ">
          <p className="mb-2">{index+1}: {q.question}</p>
          {q.options.map((option, i) => (
            <div key={i} className="mb-1">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">Submit Quiz</button>
    </div>
  );
};

export default Quiz;
