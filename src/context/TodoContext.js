import { createContext, useEffect, useState } from "react";

// localStorage에 사용할 키 선언
const TODOS_KEY = "toDos";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // 처음 렌더링 될 때 localStorage에 저장된 toDos를 가져와서 todos에 넣기
  useEffect(() => {
    const saved = localStorage.getItem(TODOS_KEY);

    if (saved) {
      //  TODOS_KEY 문자열이기 때문에 객체로 만들어 줘야 함
      setTodos(JSON.parse(saved));
    }
  }, []);

  // todos 값이 변경되면 localStorage에 저장
  useEffect(() => {
    if (todos.length > 0) {
      // 문자열 형태이기 떄문에 저장할 객체를 문자열로 바꿔줘야 함
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    } else {
      localStorage.removeItem(TODOS_KEY);
    }
  }, [todos]);

  // 새로운 할 일 추가
  const addTodo = (text) => {
    // 기존의 데이터 뒤에 새로 입력한 데이터를 추가
    const newTodo = {
      id: Date.now(),
      text,
      check: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일 완료 -> 밑줄
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  // 전체 삭제
  const removeAll = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleTodo, removeAll }}
    >
      {children}
    </TodoContext.Provider>
  );
};
