'use client'

import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react'
import { getTodos } from '../actions/formActions';
import { Button } from '@/components/ui/button';


interface Todo {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}
export default function Page() {


    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        status,
        error
    } = useInfiniteQuery({
        queryKey: ['posts', 'infinite'],
        queryFn: getTodos,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            console.log(lastPage, allPages);

            const nextPage = lastPage.length ? allPages.length + 1 : undefined
            return nextPage; // Increment page parameter for next fetch
        },
    })

    console.log(data);

    if (status === 'pending') <p>Loading...</p>
    if (status === 'error') <p>{error.message}</p>


    const content = data?.pages.map((todos: Todo[]) => (

        todos.map((todo) => (
            <div key={todo.id}>
                <h1>{todo.title}</h1>
            </div>

        ))
    ))

    return (
        <div className='contianer mx-auto'>
            <h1>Todos</h1>
            {content}

            <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
            >
                {isFetchingNextPage ? 'Loading more' : 'Load More'}
            </Button>
        </div>
    )
}
