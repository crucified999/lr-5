interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResult = ({
  score,
  totalQuestions,
  onRestart,
}: QuizResultProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultMessage = () => {
    if (percentage >= 80) return "Отлично! 🎉";
    if (percentage >= 60) return "Хорошо! 👍";
    if (percentage >= 40) return "Неплохо! 😊";
    return "Попробуйте ещё раз! 💪";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
      <div className="mb-6">
        <div className="text-6xl mb-4">
          {percentage >= 80
            ? "🎉"
            : percentage >= 60
            ? "👍"
            : percentage >= 40
            ? "😊"
            : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {getResultMessage()}
        </h2>
        <p className={`text-3xl font-bold ${getResultColor()}`}>
          Ваш результат: {score}/{totalQuestions}
        </p>
        <p className="text-lg text-gray-600 mt-2">
          ({percentage}% правильных ответов)
        </p>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all duration-1000 ${
              percentage >= 80
                ? "bg-green-500"
                : percentage >= 60
                ? "bg-blue-500"
                : percentage >= 40
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg"
      >
        Сыграть ещё раз
      </button>
    </div>
  );
};
