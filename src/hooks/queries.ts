import {useToast} from "@chakra-ui/react";
import {useQuery} from "react-query";
import {TodoState} from "../type/todo.tsx";
import {fetchTodos} from "../services/Todos.ts";


export function useFetchTodos(state: TodoState) {
    const toast = useToast()

    return useQuery({
        queryFn: () => fetchTodos(state),
        queryKey: ['todos', state],
        staleTime: 5000,
        onError: (err) => {
            if (err instanceof Error) {
                toast({
                    status: 'error',
                    title: err.message,
                    position: 'top-right'
                })
            }
        }
    })

}
