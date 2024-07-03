import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import {Todo} from "./type/todo.tsx";
interface TodoState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
    addTodo: (title: string) => void;
    toggleTodo: (todoId: string) => void;
    setTodos: (todos: Todo[]) => void;
}

export const useTodos = create<TodoState>()(
    devtools(
        persist(
            (set, get) => ({
                todos: [],
                loading: false,
                error: null,
                addTodo: (title: string) => {
                    const newTodo: Todo = { id: nanoid(), title, completed: false };
                    set(state => ({ todos: [...state.todos, newTodo] }));
                },
                toggleTodo: (todoId: string) =>
                    set(state => ({
                        todos: state.todos.map(todo =>
                            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
                        ),
                    })),
                setTodos: (todos: Todo[]) => {
                    // Merge new todos with existing ones
                    const existingTodos = get().todos;
                    const mergedTodos = [...todos, ...existingTodos.filter(todo => !todos.some(t => t.id === todo.id))];
                    set({ todos: mergedTodos });
                },
            }),
            {
                name: 'todos',
            }
        )
    )
);

export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
}))