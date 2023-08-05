import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodo";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../react-query/services/apiClient";

interface AddTodoContext {
    previousTodo: Todo[];
}
const apiClient = new APIClient<Todo>('todosx')
const useAddTodo = (onAdd:()=> void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: apiClient.post,
        onMutate: (newtodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos =[]) => [
                newtodo,
                ...todos,
            ]);
            onAdd;
            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            //  approach : invalidating the cache

            // queryClient.invalidateQueries({
            //     queryKey: ["todo"],
            // });
            // APPROACH 2: UPDATING THE DATA IN THE CACHE
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );
        },
        onError: (error,newTodo,context) =>{
            if(!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,context.previousTodo)
        }
        // onError: (error, newTodo, context) => {
        //     if (!context) return;
        //     queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
        // },
    });
};

export default useAddTodo;
