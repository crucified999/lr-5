interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

export const QuizProgress = ({
  currentQuestion,
  totalQuestions,
  progress,
}: QuizProgressProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-700">
          Вопрос {currentQuestion} / {totalQuestions}
        </h2>
        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
