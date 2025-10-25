import { useState } from "react";
import { Modal } from "./main-modal";

export const CreateTodoModal = ({
  onClose,
  onTodoCreated,
}: {
  onClose: () => void;
  onTodoCreated?: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");

  const handleCreateTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      completed: false,
    };

    const existingTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    const updatedTodos = [...existingTodos, newTodo];

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    if (onTodoCreated) {
      onTodoCreated();
    }

    onClose();
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateTodo();
  };

  return (
    <Modal title="Новая задача" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Создать
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors cursor-pointer"
          >
            Отмена
          </button>
        </div>
      </form>
    </Modal>
  );
};
