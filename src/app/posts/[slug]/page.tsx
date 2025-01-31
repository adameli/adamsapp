import React from 'react'
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { getOnePost } from '@/app/actions/postActions';
import PostComponent from './PostComponent';
import type { Metadata, } from 'next'
import { getMetaPost } from '@/app/actions/metaPostAction';
import { metaDataObject } from '@/lib/utils';
import { Props } from '@/types/globals';

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const { slug } = await params

    // fetch data
    const { post } = await getMetaPost(slug)

    return metaDataObject(post)
}

// The Post component fetches a single post by slug and displays it
export default async function Post({ params }: Props) {


    const queryClient = new QueryClient()
    // Destructure the slug from the params object and await the params object
    const { slug } = await params


    await queryClient.prefetchQuery({
        queryKey: ['post', slug],
        queryFn: () => getOnePost(slug),
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PostComponent slug={slug} />
        </HydrationBoundary>
    )


}
