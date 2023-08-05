import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../react-query/services/apiClient";
import todoService, { Todo } from "../react-query/services/todoService";

const apiClient = new APIClient<Todo>("/todos");

const useTodo = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll,
        staleTime: 10 * 10000, // 10 seconds
    });
};

export default useTodo;
