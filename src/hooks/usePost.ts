import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
interface PostQuery {
    pageSize: number;
}
const usePost = (query: PostQuery) => {
    const fetchPosts = ({ pageParam = 1 }) =>
        axios
            .get("https://jsonplaceholder.typicode.com/posts?", {
                params: {
                    _start: (pageParam - 1) * query.pageSize,
                    _limit: query.pageSize,
                },
            })
            .then((res) => res.data);

    return useInfiniteQuery<Post[], Error>({
        queryKey: ["posts", query],
        queryFn: fetchPosts,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });
};

export default usePost;
