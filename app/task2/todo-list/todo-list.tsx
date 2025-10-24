import { TodoListProps } from "./types";
import { Todo } from "./todo";

export const TodoList = ({ todos }: TodoListProps) => {

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl text-[900]">Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </div>
  );

}