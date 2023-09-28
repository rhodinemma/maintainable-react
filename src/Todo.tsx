import { useState } from "react"
import { v4 as uuid } from "uuid"

type TodoType = {
    id: string;
    content: string;
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [content, setContent] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const id = uuid()
            setTodos([{ id, content }, ...todos]);
        }
    }

    return <div>
        <h2>todos</h2>
        <input type="text" data-testid="todo-input" onChange={handleChange} onKeyDown={handleKeyDown} />

        {todos.map(todo => <div key={todo.id}>{todo.content}</div>)}
    </div>

}

export { Todo }