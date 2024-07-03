import { useTodos } from '../store.ts';
import { Checkbox, HStack, Text } from '@chakra-ui/react';
import { Todo } from '../type/todo.tsx';

export const TodoItems = ({ id, title, completed, category }: Todo) => {
    const toggleTodo = useTodos(state => state.toggleTodo);

    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
            <Text>{title}</Text>
            {category && <Text>{category}</Text>}
        </HStack>
    );
};
