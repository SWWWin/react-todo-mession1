"use client";
import { FormEvent, useState } from "react";

type TodoWriteFormProps = {
  addTodo: (text: string) => void;
};

function TodoWriteForm({ addTodo }: TodoWriteFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-3 max-w-sm mx-auto p-5 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
