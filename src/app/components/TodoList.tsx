import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
  priority: number;
};

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  return (
    <ul className="max-w-md mx-auto mt-6 space-y-4 bg-gray-50 rounded-lg p-4 shadow-md">
      {todos &&
        todos.map((el) => (
          <TodoItem
            key={el.id}
            el={el}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
    </ul>
  );
}

export default TodoList;
