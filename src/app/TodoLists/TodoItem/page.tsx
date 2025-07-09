type el = {
  id: number;
  text: string;
  checked: boolean;
};

type Props = {
  el: el;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

function TodoItem({ el, toggleTodo, deleteTodo }: Props) {
  return (
    <li
      key={el.id}
      className="flex items-center justify-between p-3 bg-white rounded shadow hover:bg-gray-50 transition"
    >
      <label className="flex items-center gap-3 cursor-pointer flex-1">
        <input
          type="checkbox"
          checked={el.checked}
          onChange={() => toggleTodo(el.id)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={`select-none text-lg ${
            el.checked ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {el.text}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(el.id)}
        className="ml-4 text-red-500 hover:text-red-700 font-bold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
