"use client";
import { FormEvent, useState } from "react";

type TodoWriteFormProps = {
  addTodo: (text: string) => void;
};

function TodoWriteForm({ addTodo }: TodoWriteFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // 빈값 막기
    addTodo(input.trim()); // 추가 함수 호출
    setInput(""); // 입력 초기화
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2 max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
