import { TodoProvider } from "../../context/TodoContext";
import TodoCount from "./TodoCount";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../scss/todolist.scss";

export default function TodoApp() {
  return (
    <TodoProvider>
      <div className="todoApp">
        <div>
          <TodoForm />
          <TodoList />
          <TodoCount />
        </div>
      </div>
    </TodoProvider>
  );
}
