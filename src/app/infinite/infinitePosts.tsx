
'use client'

// import { useRouter } from 'next/navigation'
import React from 'react'
import { getAllPosts } from '../actions/postActions'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import PostCard from '@/components/ui/PostCard'
import { Post } from '@/types/globals'
import { notFound } from 'next/navigation'


export default function InfiniteQuery() {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError
    } = useInfiniteQuery({
        queryKey: ['posts-infinite'] as const,
        queryFn: getAllPosts,
        initialPageParam: '',
        getNextPageParam: (lastPage) => {
            const hasNextPage = lastPage.posts.pageInfo.hasNextPage
            const nextPage = hasNextPage ? lastPage.posts.pageInfo.endCursor : undefined
            return nextPage
        },
    })

    if (isLoading) return <div className='flex justify-center my-20'><h1>LOADING POSTS...</h1></div>
    if (isError) return notFound();

    const posts: Post[] = []
    data?.pages.forEach(pageObj => {
        posts.push(...pageObj.posts.nodes)
    })

    return (
        <section className='container mx-auto '>
            <div className='grid justify-items-center grid-cols-1 md:grid-cols-2'>
                <PostCard posts={posts} />
            </div>

            <div className='flex justify-center'>
                <Button
                    className='my-5'
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >

                    {isFetchingNextPage ? 'Loading posts' : hasNextPage ? 'Load More' : 'No more posts'}

                </Button>
            </div>
        </section>
    )
}
