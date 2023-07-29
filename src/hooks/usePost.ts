import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
const usePost = (userId: number | undefined) => {
    const fetchPosts = () =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts?", {
                params: {
                    userId,
                },
            })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchPosts,
    });
};

export default usePost;
