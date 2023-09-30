import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";
import { Aggregation } from "./Aggregation";
import { SearchBox } from "./SearchBox";
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
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
      <SearchBox performSearch={search} />
    </div>
  );
};

export { Todo };
