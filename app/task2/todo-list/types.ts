export type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

export type FilterType = "all" | "active" | "completed";

export type TodoListProps = {
  todos: Todo[];
  onTodoUpdate?: () => void;
  filter?: FilterType;
  onFilterChange?: (filter: FilterType) => void;
};
