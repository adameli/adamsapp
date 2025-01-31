
import React from 'react'
import { getAllPosts } from '../actions/postActions';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import InfiniteQuery from './infinitePosts';

export default async function InfinitePage() {

    const queryClient = new QueryClient()

    await queryClient.prefetchInfiniteQuery({
        queryKey: ['posts-infinite'] as const,
        queryFn: getAllPosts,
        initialPageParam: null,
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <InfiniteQuery />
        </HydrationBoundary>
    )
}
