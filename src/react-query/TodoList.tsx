import useTodo from "../hooks/useTodo";

const TodoList = () => {
    const { data, error, isLoading } = useTodo();

    if (isLoading) return <p>I am loading</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <ul className="list-group">
            {data?.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
