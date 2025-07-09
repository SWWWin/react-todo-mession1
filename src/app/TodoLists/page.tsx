"use client";
import { Children, useRef, useState } from "react";
import TodoWrtieForm from "./TodoWriteForm/page";
import TodoList from "./TodoList/page";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
function TodoLists() {
  const [todos, setTodos] = useState([
    { id: 1, text: "내용1", checked: true },
    { id: 2, text: "내용2", checked: false },
    { id: 3, text: "내용3", checked: false },
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

  const addTodo = (text: string) => {
    const newState = [...todos, { id: maxId.current++, text, checked: false }];
    setTodos(newState);
  };

  return (
    <main>
      <TodoWrtieForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </main>
  );
}

export default TodoLists;
