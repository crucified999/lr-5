import { QuizQuestionData } from "../data/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionData;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
}

export const QuizQuestion = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}: QuizQuestionProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedAnswer === index
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                selectedAnswer === index
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }`}
            >
              {selectedAnswer === index && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>
            <span className="text-gray-700 font-medium">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
