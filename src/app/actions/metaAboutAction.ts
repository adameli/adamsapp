'use server'

import fetchApi from "@/lib/graphql/client"
import { metaPageQuery } from "@/lib/graphql/queries/metaPageQuery"



export async function getAboutPageMeta(pathName: string) {

    try {
        const res = await fetchApi(metaPageQuery, { id: pathName })
        const data = res.data

        return data
    } catch (error) {
        console.error('Error fetching employee page meta:', error)
        throw new Error('Failed to fetch employee page meta')
    }

}