import fetchApi from '@/lib/graphql/client'
import type { MetadataRoute } from 'next'
import { env } from '@/env'

interface Page {
    slug: string
    modified: string
    uri: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const query = `
    query pages {
        pages {
            nodes {
                slug
                modified
                uri
            }
        }
    }
  `

    const data = await fetchApi(query)

    const pages = data.data.pages.nodes.map((page: Page) => {
        return {
            url: `${env.NEXT_PUBLIC_URL}${page.uri}`,
            lastModified: new Date(page.modified),
            priority: 1
        }
    })

    return pages
}