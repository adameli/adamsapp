'use server'

import fetchApi from "@/lib/graphql/client";
import { POST, POSTS } from "@/lib/graphql/queries/postQueries";
import { QueryFunctionContext } from "@tanstack/react-query";
// interface Props {
//     queryKey: string[],
//     signal: AbortSignal,
//     pageParam: string
// }


export async function getAllPosts(context: QueryFunctionContext<readonly ['posts-infinite'], unknown>) {

    const { pageParam } = context;
    try {

        const res = await fetchApi(POSTS, { first: 2, after: pageParam });

        const data = res.data;

        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}








export async function getPostsPagination(postsCount: number, cursor: string | null = null, is: string | null) {

    try {

        let res = null
        if (is === 'after' || !is) {
            res = await fetchApi(POSTS, { first: postsCount, after: cursor });
        } else {
            res = await fetchApi(POSTS, { last: postsCount, before: cursor });
        }


        const data = res.data;


        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}


export async function getOnePost(id: string) {
    try {
        const res = await fetchApi(POST, { id });
        const data = res.data;
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}