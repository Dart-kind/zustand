import { Stack} from '@chakra-ui/react';
import { TodoItems } from './TodoItems.tsx';
import {useFilter, useTodos} from '../store.ts';



export const TodoList = () => {
    const filter = useFilter((state) => state.filter);
    const todos = useTodos((state) => {
        switch (filter) {
            case 'completed':
                return state.todos.filter((todo) => todo.completed);
            case 'uncompleted':
                return state.todos.filter((todo) => !todo.completed);
            default:
                return state.todos;
        }
    });

    return (
        <Stack minH="300px">
            {todos.map((todo) => (
                <TodoItems key={todo.id} {...todo} />
            ))}
        </Stack>
    );
};