import { useMemo, useState } from "react";
import { TodoType } from "./types";

export const useTodos = (items: TodoType[]) => {
    const [todos, setTodos] = useState<TodoType[]>(items);
    const [category, setCategory] = useState<String>('total');

    const displayTodos = useMemo(() => {
        switch (category) {
            case 'total':
                return todos;
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'active':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }, [category, todos])

    const addTodo = (todo: TodoType) => {
        setTodos([todo, ...todos]);
    }

    const toggleTodo = (todo: TodoType) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return ({ ...item, completed: !item.completed })
            }
            return item
        }))
    }

    const deleteTodo = (todo: TodoType) => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return { displayTodos, setCategory, addTodo, toggleTodo, deleteTodo }
}