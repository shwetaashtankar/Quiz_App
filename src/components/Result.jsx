import React from 'react';

const Result = ({ quiz, answers }) => {
  const score = quiz.questions.reduce((acc, question, index) => {
    return acc + (question.answer === answers[index] ? 1 : 0);
  }, 0);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-lime-300 shadow-md rounded px-10 pt-8 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Quiz Results</h2>
        <p className="mb-4 text-red-500 text-xl">Your Score: {score} / {quiz.questions.length}</p>
        {quiz.questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="mb-2 text-blue-800 text-xl">{q.question}</p>
            <p className={`mb-1 ${answers[index] === q.answer ? 'text-blue-800 text-xl' : 'text-red-500'}`}>
              Your Answer: {answers[index]}
            </p>
            {answers[index] !== q.answer && (
              <p className="text-green-500">Correct Answer: {q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
