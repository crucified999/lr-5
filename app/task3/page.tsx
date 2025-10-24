"use client";

import { useState, useEffect } from "react";
import { QuizQuestion } from "./components/quiz-question";
import { QuizProgress } from "./components/quiz-progress";
import { QuizResult } from "./components/quiz-result";
import { QuizTimer } from "./components/quiz-timer";
import { quizData } from "./data/quiz-data";

export default function Task3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  // Таймер для каждого вопроса
  useEffect(() => {
    if (isCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Время истекло, переходим к следующему вопросу
          handleNext();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, isCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(20);
    } else {
      // Викторина завершена
      calculateScore();
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === quizData[questionIndex].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setScore(0);
    setIsCompleted(false);
    setTimeLeft(20);
  };

  const isAnswerSelected = selectedAnswers[currentQuestion] !== undefined;
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <QuizResult
          score={score}
          totalQuestions={quizData.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full">
        <QuizProgress
          currentQuestion={currentQuestion + 1}
          totalQuestions={quizData.length}
          progress={progress}
        />

        <QuizTimer timeLeft={timeLeft} />

        <QuizQuestion
          question={quizData[currentQuestion]}
          selectedAnswer={selectedAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="flex justify-between mt-8">
          <div className="text-sm text-gray-500">
            Вопрос {currentQuestion + 1} из {quizData.length}
          </div>
          <button
            onClick={handleNext}
            disabled={!isAnswerSelected}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isAnswerSelected
                ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === quizData.length - 1 ? "Завершить" : "Далее"}
          </button>
        </div>
      </div>
    </div>
  );
}
