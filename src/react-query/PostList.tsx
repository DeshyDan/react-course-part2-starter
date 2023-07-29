import { useState } from "react";
import usePost from "../hooks/usePost";
import React from "react";

const PostList = () => {
    const pageSize = 10;
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
        usePost({ pageSize });

    if (isLoading) return <p>I am loading</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul className="list-group">
                {data.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((post) => (
                            <li className="list-group-item">{post.body}</li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>

            <button
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                className="btn btn-primary my-3 ms-1"
            >
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
        </>
    );
};

export default PostList;
