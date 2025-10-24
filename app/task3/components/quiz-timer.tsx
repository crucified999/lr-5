interface QuizTimerProps {
  timeLeft: number;
}

export const QuizTimer = ({ timeLeft }: QuizTimerProps) => {
  const isWarning = timeLeft <= 5;
  const isCritical = timeLeft <= 3;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-center">
        <div
          className={`text-2xl font-bold transition-colors ${
            isCritical
              ? "text-red-500 animate-pulse"
              : isWarning
              ? "text-orange-500"
              : "text-blue-500"
          }`}
        >
          {timeLeft}с
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ${
            isCritical
              ? "bg-red-500"
              : isWarning
              ? "bg-orange-500"
              : "bg-blue-500"
          }`}
          style={{ width: `${(timeLeft / 20) * 100}%` }}
        />
      </div>
    </div>
  );
};
