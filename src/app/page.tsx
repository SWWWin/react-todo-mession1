"use client";
import { useRef, useState } from "react";
import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";
function TodoLists() {
  const [todos, setTodos] = useState([
    { id: 1, text: "내용1", checked: true, priority: 1 },
    { id: 2, text: "내용2", checked: false, priority: 2 },
    { id: 3, text: "내용3", checked: false, priority: 3 },
  ]);

  let maxId = useRef(4); // 그냥 변수 사용 시 id 값이 렌더링 할 때마다 초기화되는 문제 생김
  const deleteTodo = (id: number) => {
    const newState = todos.filter((el) => el.id !== id);
    setTodos(newState);
  };

  const toggleTodo = (id: number) => {
    const newState = todos.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setTodos(newState);
  };

  const addTodo = (text: string, priority: number) => {
    const newState = [
      ...todos,
      { id: maxId.current++, text, checked: false, priority },
    ];
    setTodos(newState);
  };

  return (
    <main>
      <TodoWriteForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </main>
  );
}

export default TodoLists;
