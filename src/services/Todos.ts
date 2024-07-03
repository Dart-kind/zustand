import {Todo, TodoState} from "../type/todo.tsx";

const BASE = 'https://jsonplaceholder.typicode.com/todos'

export async function fetchTodos(state: TodoState = 'all', limit: number = 10): Promise<Todo[]> {
    const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;
    const limitQuery = limit ? `&_limit=${limit}` : '';

    const res = await fetch(`${BASE}${queries}`)

    if (!res.ok) throw new Error('Failed to fetch todos')

    return res.json()
}