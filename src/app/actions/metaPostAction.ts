'use server'

import fetchApi from "@/lib/graphql/client";
import { metaPost } from "@/lib/graphql/queries/metaPostQuery";

export async function getMetaPost(slug: string) {

    try {
        const res = await fetchApi(metaPost, { id: slug })
        const data = res.data;
        return data;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error('Failed to fetch post');
    }
}

