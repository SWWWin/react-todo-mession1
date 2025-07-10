type el = {
  id: number;
  text: string;
  checked: boolean;
  priority: number;
};

type Props = {
  el: el;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

function TodoItem({ el, toggleTodo, deleteTodo }: Props) {
  console.log(el.priority);
  const priorityColorClass = (() => {
    switch (el.priority) {
      case 1:
        return "bg-red-600";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-yellow-400";
      case 4:
        return "bg-green-500";
      case 5:
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  })();

  return (
    <li
      key={el.id}
      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
    >
      <label className="flex items-center gap-4 cursor-pointer flex-1">
        <input
          type="checkbox"
          checked={el.checked}
          onChange={() => toggleTodo(el.id)}
          className="w-6 h-6 text-blue-600 border-gray-300 rounded-lg focus:ring-blue-500 transition"
        />
        <span
          className={`select-none text-lg font-medium ${
            el.checked ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {el.text}
        </span>
      </label>

      <span
        className={`${priorityColorClass} text-xs font-bold 
              w-6 h-6 flex items-center justify-center rounded-full 
              bg-gray-200`}
      >
        {el.priority}
      </span>

      <button
        onClick={() => deleteTodo(el.id)}
        className="ml-6 text-red-600 hover:text-red-800 font-semibold px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
