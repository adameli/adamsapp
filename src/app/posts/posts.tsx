// app/posts/posts.tsx
'use client'


import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPostsPagination } from "../actions/postActions";
import { Button } from "@/components/ui/button";
import React from "react";
import { notFound, useRouter } from "next/navigation";
import PostCard from "@/components/ui/PostCard";

// Post interface
import { Post } from "@/types/globals";
// import { env } from "@/env";


//fixa så att du tar in params och utgår utifrån querien som finns i urlen.

export function PostPagination({ cursor, page, is }: { cursor: string | null, page: number, is: string }) {
    // console.log(env.DATABASE_URL);

    const router = useRouter();

    const updateQuery = (updates: Record<string, string>) => {
        const params = new URLSearchParams(window.location.search);

        // Iterate over the keys and values in the updates object
        Object.entries(updates).forEach(([key, value]) => {
            params.set(key, value); // Set each key-value pair
        });

        // Update the URL without reloading the page
        router.push(`?${params.toString()}`, { scroll: false },);
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['posts', { page }],
        queryFn: () => getPostsPagination(2, cursor, is),
        placeholderData: keepPreviousData,
    })

    if (isLoading) return <div className='flex justify-center my-20'><h1>LOADING POSTS...</h1></div>
    if (isError) return notFound();

    // console.log(data);

    // Destructure the data objects page info to decide if we can go to next page or previous page
    // The end- and startCursor are used to decide if we want to fetch the next or previous posts
    const { endCursor, hasNextPage, hasPreviousPage, startCursor } = data.posts.pageInfo

    const posts: Post[] = data.posts.nodes

    return <>
        <main>
            <header>
                <h1 className="text-center text-4xl mt-10">Posts</h1>
            </header>
            <section className="container mx-auto max-w-6xl flex flex-wrap justify-center">
                <PostCard posts={posts} />
            </section>

            <nav className="container mx-auto max-w-6xl flex justify-center items-center gap-10 mt-10">
                <Button
                    className={!hasPreviousPage ? 'cursor-not-allowed' : ''}
                    onClick={() => {

                        updateQuery({
                            page: (page - 1).toString(),
                            cursor: startCursor,
                            is: 'before'
                        })

                    }}
                    disabled={!hasPreviousPage}
                >Back</Button>

                <div className="flex gap-3">
                    <Button
                        className="p-2 hover:bg-stone-400 bg-white text-black"
                        onClick={() => {

                            updateQuery({
                                page: (page - 1).toString(),
                                cursor: startCursor,
                                is: 'before'
                            })

                        }}
                        disabled={!hasPreviousPage}
                    >{!hasPreviousPage ? '' : page - 1}</Button>



                    <span className="bg-stone-300 p-2 rounded-md">{page}</span>

                    <Button
                        className="p-2 hover:bg-stone-400 bg-white text-black"
                        onClick={() => {
                            if (hasNextPage) {

                                updateQuery({
                                    page: (page + 1).toString(),
                                    cursor: endCursor,
                                    is: 'after'
                                })

                            }
                        }}
                        // Disable the Next Page button until we know a next page is available
                        disabled={!hasNextPage}
                    >{!hasNextPage ? '' : page + 1}</Button>
                </div>

                <Button
                    onClick={() => {
                        if (hasNextPage) {

                            updateQuery({
                                page: (page + 1).toString(),
                                cursor: endCursor,
                                is: 'after'
                            })

                        }
                    }}
                    // Disable the Next Page button until we know a next page is available
                    disabled={!hasNextPage}
                >Next</Button>
            </nav>
        </main>
    </>
}
