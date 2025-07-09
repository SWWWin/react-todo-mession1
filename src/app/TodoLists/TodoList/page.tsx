import TodoItem from "../TodoItem/page";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  return (
    <ul className="max-w-md mx-auto mt-6 space-y-3">
      {todos.map((el) => (
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
