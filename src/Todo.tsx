import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { useTodos } from "./useTodos";
import "./Todo.css";
import { TodoType } from "./types";

const Todo = ({ items = [] }: { items?: TodoType[] }) => {
  const { displayTodos, setCategory, addTodo, toggleTodo, deleteTodo } =
    useTodos(items);
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <div className="aggregation">
        <button data-testid="todo-total" onClick={() => setCategory("total")}>
          Total
        </button>
        <button
          data-testid="todo-completed"
          onClick={() => setCategory("completed")}
        >
          Completed
        </button>
        <button data-testid="todo-active" onClick={() => setCategory("active")}>
          Active
        </button>
      </div>
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
