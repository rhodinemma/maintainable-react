import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { useTodos } from "../hooks/useTodos";
import { TodoType } from "../types";
import { Aggregation } from "./Aggregation";
import { SearchInput } from "./SearchInput";
import "./Todo.css";

const Todo = ({ items = [] }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    switchCategory,
    addTodo,
    toggleTodo,
    deleteTodo,
    search,
    likeTodo
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
        onLikeItem={likeTodo}
      />
      <SearchInput performSearch={search} />
    </div>
  );
};

export { Todo };
