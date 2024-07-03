export type TodoState = 'all' | 'completed' | 'active'

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    category?: string;
};