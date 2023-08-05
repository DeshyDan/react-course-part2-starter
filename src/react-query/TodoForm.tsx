import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodo";
import axios from "axios";

const TodoForm = () => {
    const queryClient = useQueryClient();

    const addTodo = useMutation({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
                .then((res) => res.data),
        onSuccess: (savedTodo, newTodo) => {
            //  approach : invalidating the cache

            // queryClient.invalidateQueries({
            //     queryKey: ["todo"],
            // });
            // APPROACH 2: UPDATING THE DATA IN THE CACHE
            queryClient.setQueriesData<Todo[]>(["todo"], (todos) => [
                savedTodo,
                ...(todos || []),
            ]);

            console.log(savedTodo);
        },
    });
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            className="row mb-3"
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current && ref.current.value) {
                    addTodo.mutate({
                        id: 0,
                        title: ref.current?.value,
                        completed: false,
                        userId: 1,
                    });
                }
            }}
        >
            <div className="col">
                <input ref={ref} type="text" className="form-control" />
            </div>
            <div className="col">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;
