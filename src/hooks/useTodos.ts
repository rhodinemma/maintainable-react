import { useMemo, useState } from "react";
import { TodoType } from "../types";

export const useTodos = (items: TodoType[]) => {
    const [todos, setTodos] = useState<TodoType[]>(items);
    const [category, switchCategory] = useState<String>('total');
    const [query, setQuery] = useState<String>('')

    const completed = useMemo(() => {
        return todos.filter(todo => todo.completed)
    }, [todos])

    const active = useMemo(() => {
        return todos.filter(todo => !todo.completed)
    }, [todos])

    const displayTodos = useMemo(() => {
        function getDisplayTodos() {
            switch (category) {
                case 'total':
                    return todos;
                case 'completed':
                    return completed;
                case 'active':
                    return active;
                default:
                    return todos;
            }
        }

        const items = getDisplayTodos();
        return items.filter(item => item.content.includes(query.toString()))
    }, [active, category, completed, query, todos])

    const aggregation = useMemo(() => {
        return {
            total: todos.length,
            completed: completed.length,
            active: active.length
        }
    }, [active.length, completed.length, todos.length])

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

    const likeTodo = (todo: TodoType) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return ({ ...item, favorite: !item.favorite })
            }
            return item
        }))
    }

    const deleteTodo = (todo: TodoType) => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    const search = (query: string) => {
        setQuery(query);
    }

    return { displayTodos, aggregation, switchCategory, addTodo, toggleTodo, deleteTodo, search, likeTodo }
}