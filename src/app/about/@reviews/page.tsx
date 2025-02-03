import { getReview } from '@/app/actions/reviewAction'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import ReviewCard from './ReviewCard'

export default async function reviewsPage() {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['reviews'],
        queryFn: getReview,
        staleTime: 3000
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ReviewCard />
        </HydrationBoundary>
    )
}
