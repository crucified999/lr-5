import { useState } from "react";
import { Todo as TodoType } from "./types";
import { Check, Trash2 } from "lucide-react";

export const Todo = ({ id, title, description }: TodoType) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="flex items-center justify-between gap-3 border-2 border-black rounded-xl p-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          #{id} {title}
        </h3>
        <p>{description ?? ""}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={handleComplete}>
          <Check
            className={`w-4 h-4 ${
              isCompleted ? "text-green-600" : "text-gray-500"
            }`}
          />
        </button>
        <button>
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
