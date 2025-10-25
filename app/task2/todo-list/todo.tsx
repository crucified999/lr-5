import { useEffect, useState } from "react";
import { Todo as TodoType } from "./types";
import { Check, Trash2 } from "lucide-react";

export const Todo = ({
  id,
  title,
  description,
  completed,
  onTodoUpdate,
}: TodoType & { onTodoUpdate?: () => void }) => {
  const handleComplete = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const updatedTodos = todos.map((todo: TodoType) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    if (onTodoUpdate) {
      onTodoUpdate();
    }
  };

  const handleDelete = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const updatedTodos = todos.filter((todo: TodoType) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    if (onTodoUpdate) {
      onTodoUpdate();
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 border-2 border-black rounded-xl p-5 w-[350px]">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          #{id} {title}
        </h3>
        <p>{description ?? ""}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={handleComplete} className="cursor-pointer">
          <Check
            className={`w-4 h-4 hover:text-green-600 ${
              completed ? "text-green-600" : "text-gray-500"
            }`}
          />
        </button>
        <button className="cursor-pointer" onClick={handleDelete}>
          <Trash2 className="w-4 h-4 hover:text-red-600" />
        </button>
      </div>
    </div>
  );
};
