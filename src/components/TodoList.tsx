import { useEffect } from 'react';
import { List } from '@chakra-ui/react';
import { TodoState } from '../type/todo.tsx';
import { useFetchTodos } from '../hooks/queries.ts';
import { TodoItems } from './TodoItems.tsx';
import { useTodos } from '../store.ts';

type TodoListProps = {
    state: TodoState;
};

export const TodoList = ({ state }: TodoListProps) => {
    const { data, isSuccess } = useFetchTodos(state);
    const setTodos = useTodos(state => state.setTodos);
    const todos = useTodos(state => state.todos);

    useEffect(() => {
        if (isSuccess && data) {
            setTodos(data); // Update Zustand store with fetched todos
        }
    }, [isSuccess, data, setTodos]);

    const filteredTodos = state === 'all' ? todos :
        state === 'completed' ? todos.filter(todo => todo.completed) :
            todos.filter(todo => !todo.completed);

    return (
        <List>
            {filteredTodos.map(todo => (
                <TodoItems key={todo.id} {...todo} />
            ))}
        </List>
    );
};
