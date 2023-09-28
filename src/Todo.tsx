import { useState } from "react";
import { v4 as uuid } from "uuid";

type TodoType = {
    id: string;
    content: string;
};

const TodoList = ({ todos }: { todos: TodoType[] }) => {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.content}</div>
            ))}
        </>
    )
}

const TodoInput = ({ onItemAdded }: { onItemAdded: (todo: TodoType) => void }) => {
    const [content, setContent] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const id = uuid();
            onItemAdded({ id, content });
        }
    };

    return (
        <input
            type="text"
            data-testid="todo-input"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const onItemAdded = (todo: TodoType) => {
        setTodos([todo, ...todos]);
    }

    return (
        <div>
            <h2>todos</h2>
            <TodoInput onItemAdded={onItemAdded} />
            <TodoList todos={todos} />
        </div>
    );
};

export { Todo };