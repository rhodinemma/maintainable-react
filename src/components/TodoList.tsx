import { TodoType } from "../types";

const TodoList = ({
  todos,
  onToggleItem,
  onDeleteItem,
  onLikeItem,
}: {
  todos: TodoType[];
  onToggleItem: (todo: TodoType) => void;
  onDeleteItem: (todo: TodoType) => void;
  onLikeItem: (todo: TodoType) => void;
}) => {
  return (
    <>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id} data-testid="todo-item">
          <span
            data-completed={todo.completed}
            data-favorited={todo.favorite}
            onClick={() => onToggleItem(todo)}
          >
            {todo.content}
          </span>
          <button data-testid="like-button" onClick={() => onLikeItem(todo)}>
            Like
          </button>
          <button
            data-testid="delete-button"
            onClick={() => onDeleteItem(todo)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export { TodoList };
