import { useState } from "react";
import { TodoType } from "./types";

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

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

    return { todos, addTodo, toggleTodo, deleteTodo }
}