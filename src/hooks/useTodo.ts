import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../react-query/services/apiClient";

const apiClient = new APIClient<Todo>("/todos");
export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}
const useTodo = () => {
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        staleTime: 10 * 10000, // 10 seconds
    });
};

export default useTodo;
