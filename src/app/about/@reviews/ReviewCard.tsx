'use client'

import { getReview } from '@/app/actions/reviewAction'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ReviewCard() {

    const { data } = useQuery({
        queryKey: ['reviews'],
        queryFn: getReview,
        // refetchOnMount: true,
        refetchInterval: 3000,
    })

    const user = data[0]


    return (
        <section className='bg-pink-800 text-white rounded-lg mx-4 '>
            <div>
                <h1 className='text-center text-2xl p-3'>{user.name.title} {user.name.first} {user.name.last}</h1>
            </div>
            <div className='bg-pink-300 p-4'>
                <p className='text-center'>-: This team buildes simple and clean websites :-</p>
            </div>
        </section>
    )
}
