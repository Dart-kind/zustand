import { useFilter } from '../store.ts';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { TodoList } from './TodoList.tsx';

export const TodoViewer = () => {
    const { filter, setFilter } = useFilter();

    return (
        <Stack>
            <ButtonGroup>
                <Button disabled={filter === 'all'} onClick={() => setFilter('all')}>
                    All
                </Button>
                <Button disabled={filter === 'uncompleted'} onClick={() => setFilter('uncompleted')}>
                    Open
                </Button>
                <Button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>
                    Completed
                </Button>
            </ButtonGroup>

            <TodoList state={filter} />
        </Stack>
    );
};
