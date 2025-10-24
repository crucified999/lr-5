import { TodoListProps, FilterType } from "./types";
import { Todo } from "./todo";
import { FilterButtons } from "./filter-buttons";
import { TodoCounter } from "./todo-counter";

export const TodoList = ({
  todos,
  onTodoUpdate,
  filter = "all",
  onFilterChange,
}: TodoListProps) => {
  
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      case "all":
      default:
        return true;
    }
  });

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-3xl text-[900]">Todo List</h1>

      <TodoCounter todos={todos} />

      {onFilterChange && (
        <FilterButtons currentFilter={filter} onFilterChange={onFilterChange} />
      )}

      <ul className="flex flex-col gap-5">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Todo {...todo} onTodoUpdate={onTodoUpdate} />
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <div className="text-gray-500 text-lg">
          {filter === "all" && "Нет задач"}
          {filter === "active" && "Нет активных задач"}
          {filter === "completed" && "Нет выполненных задач"}
        </div>
      )}
    </div>
  );
};
