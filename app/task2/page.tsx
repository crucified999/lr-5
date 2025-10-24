"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CreateTodoModal } from "./modals/create-todo-modal";
import { TodoList } from "./todo-list/todo-list";
import clsx from "clsx";

export default function Task2() {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]"); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={clsx("h-screen w-screen p-50", isModalOpen && "overflow-hidden bg-black/50")}>
      <TodoList todos={todos} /> 
      <button className="cursor-pointer fixed bottom-15 right-50 bg-blue-500 text-white p-2 rounded-full" onClick={() => setIsModalOpen(true)}>
        <Plus />
      </button>
      {isModalOpen && <CreateTodoModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
} 