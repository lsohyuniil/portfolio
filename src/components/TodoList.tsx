import SectionTitle from "../components/SectionTitle";
import TodoApp from "../components/todolist/TodoApp";

const TodoList = () => {
  return (
    <div className="main todolist" id="todolist">
      <div className="content-inner">
        <SectionTitle
          title="TodoList"
          subTitle="오늘의 할일 스케줄을 관리해보세요."
        />
        <div>
          <TodoApp />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
