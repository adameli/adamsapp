
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'
import { getEmployees } from '../actions/employeeAction';
import AboutPage from './AboutPage';
import { metaDataObject } from '@/lib/utils';
import { getPageMeta } from '../actions/metaPageAction';


export async function generateMetadata() {

    // fetch data - the about page
    const { page } = await getPageMeta('about')

    return metaDataObject(page)
}

export default async function About() {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['employees'],
        queryFn: getEmployees,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <AboutPage />
        </HydrationBoundary>
    )
}
