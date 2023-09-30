import { TodoType } from "./types"

const TodoList = ({ todos, onToggleItem }: { todos: TodoType[], onToggleItem: (todo: TodoType) => void }) => {
    return (
        <>
            {todos.map((todo) => (
                <div className="todo-item" key={todo.id} data-completed={todo.completed} onClick={() => onToggleItem(todo)}>{todo.content}</div>
            ))}
        </>
    )
}

export { TodoList }