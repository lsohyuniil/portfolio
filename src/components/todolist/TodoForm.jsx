import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="오늘의 할 일을 입력 하세요."
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
