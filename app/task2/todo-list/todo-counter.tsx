import { Todo } from "./types";

type TodoCounterProps = {
  todos: Todo[];
};

export const TodoCounter = ({ todos }: TodoCounterProps) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div className="text-sm text-gray-600 mb-4">
      Всего: {total} | Выполнено: {completed}
    </div>
  );
};
