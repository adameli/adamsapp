import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { PageData } from "@/types/globals"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function metaDataObject(data: PageData): Metadata {

  const index = data.seo.metaRobotsNoindex ? false : true
  const follow = data.seo.metaRobotsNofollow ? false : true
  const canonical = cleanUrl(data.seo.canonical)
  const opUrl = cleanUrl(data.seo.opengraphUrl)

  return {
    title: data.seo.title,
    keywords: data.seo.focuskw,
    description: data.seo.metaDesc,
    openGraph: {
      description: data.seo.opengraphDescription,
      url: opUrl,
      title: data.seo.opengraphTitle,
      images: data.seo.opengraphImage?.sourceUrl,
    },
    other: {
      canonical: canonical,
      developer: data.author.node.firstName + ' ' + data.author.node.lastName,
    },
    twitter: {
      title: data.seo.twitterTitle,
      description: data.seo.twitterDescription,
      images: data.seo.twitterImage?.sourceUrl,
    },
    creator: data.author.node.name,
    robots: {
      index: index,
      follow: follow,
      nocache: false,
      googleBot: {
        index: index,
        follow: follow,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

function cleanUrl(url: string) {
  if (url[url.length - 1] === '/') {
    url = url.slice(0, -1)
  }
  return url
}

export async function wait() {
  return await new Promise((resolve) => { setTimeout(resolve, 3000) })
}