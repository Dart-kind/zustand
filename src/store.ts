import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'

export const useTodos = create(devtools(persist((set, get) => ({
    todos: [],
    loading: false,
    error: null,
    addTodo: (title) => {
        const newTodo = { id: nanoid(), title, completed: false } //=>
        //                                        ^?

        set({ todos: [...get().todos, newTodo] })
    },
    toggleTodo: (todoId) => set({
        todos: get().todos.map(
            todo => todoId === todo.id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    }),

}), { name: 'todos' })))

export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
}))