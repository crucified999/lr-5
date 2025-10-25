"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { CreateTodoModal } from "./modals/create-todo-modal";
import { TodoList } from "./todo-list/todo-list";
import { FilterType } from "./todo-list/types";
import clsx from "clsx";

export default function Task2() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleTodoCreated = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  };

  return (
    <div
      className={clsx(
        "h-screen w-screen p-50",
        isModalOpen && "overflow-hidden"
      )}
    >
      <TodoList
        todos={todos}
        onTodoUpdate={handleTodoCreated}
        filter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      <button
        className="cursor-pointer fixed bottom-15 right-50 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus />
      </button>
      {isModalOpen && (
        <CreateTodoModal
          onClose={() => setIsModalOpen(false)}
          onTodoCreated={handleTodoCreated}
        />
      )}
    </div>
  );
}
