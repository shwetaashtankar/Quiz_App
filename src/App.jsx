import React, { useState, useEffect } from 'react';
import Admin from './components/Admin';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [view, setView] = useState('admin'); // 'admin', 'quiz', 'result'

  useEffect(() => {
    const savedQuiz = localStorage.getItem('quiz');
    if (savedQuiz) {
      setQuiz(JSON.parse(savedQuiz));
    }
  }, []);

  const handleCreateQuiz = (newQuiz) => {
    setQuiz(newQuiz);
    localStorage.setItem('quiz', JSON.stringify(newQuiz));
    setView('quiz');
  };

  const handleSubmitQuiz = (userAnswers) => {
    setAnswers(userAnswers);
    setView('result');
  };

  const handleRetakeQuiz = () => {
    setAnswers([]);
    setView('quiz');
  };

  return (
    <div className="container mx-auto p-4">
      {view === 'admin' && <Admin onCreateQuiz={handleCreateQuiz} />}
      {view === 'quiz' && quiz && <Quiz quiz={quiz} onSubmitQuiz={handleSubmitQuiz} />}
      {view === 'result' && <Result quiz={quiz} answers={answers} />}
      {view === 'result' && (
        <button onClick={handleRetakeQuiz} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Retake Quiz
        </button>
      )}
    </div>
  );
};

export default App;
