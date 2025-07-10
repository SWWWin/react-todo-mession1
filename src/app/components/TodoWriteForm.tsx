"use client";
import { FormEvent, useState } from "react";

type TodoWriteFormProps = {
  addTodo: (text: string, priority: number) => void; // 우선순위도 넘겨줘야 해서 타입 변경
};

function TodoWriteForm({ addTodo }: TodoWriteFormProps) {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState(3); // 기본값 3 (보통)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim(), priority); // 우선순위 같이 전달
    setInput("");
    setPriority(3); // 제출 후 기본값으로 초기화
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-3 max-w-lg mx-auto py-3 px-6 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-grow px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          우선순위 선택
        </option>
        <option value={1}>1 - 매우 높음</option>
        <option value={2}>2 - 높음</option>
        <option value={3}>3 - 보통</option>
        <option value={4}>4 - 낮음</option>
        <option value={5}>5 - 매우 낮음</option>
      </select>

      <button
        type="submit"
        className="px-6 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        등록
      </button>
    </form>
  );
}

export default TodoWriteForm;
