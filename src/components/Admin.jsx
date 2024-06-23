import React, { useState } from 'react';

const Admin = ({ onCreateQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const addQuestion = () => {
    setQuestions([...questions, {
      question: currentQuestion,
      options: currentOptions,
      answer: currentAnswer
    }]);
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
    setCurrentAnswer('');
  };

  const createQuiz = () => {
    if (title && questions.length) {
      onCreateQuiz({ title, questions });
      setTitle('');
      setQuestions([]);
    } else {
      alert('Please provide a title and at least one question.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 text-white">Create Quiz</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz Title"
        className="border p-2 mb-4 w-full"
      />
      <div className="mb-4">
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="Question"
          className="border p-2 mb-2 w-full"
        />
        {currentOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...currentOptions];
              newOptions[index] = e.target.value;
              setCurrentOptions(newOptions);
            }}
            placeholder={`Option ${index + 1}`}
            className="border p-2 mb-2 w-full"
          />
        ))}
        <input
          type="text"
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          placeholder="Correct Answer"
          className="border p-2 mb-4 w-full"
        />
        <button onClick={addQuestion} className="bg-blue-500 text-white py-2 px-4 rounded">Add Question</button>
      </div>
      <button onClick={createQuiz} className="bg-green-500 text-white py-2 px-4 rounded">Create Quiz</button>
    </div>
  );
};

export default Admin;
