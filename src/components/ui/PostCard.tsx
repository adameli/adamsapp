'use client'


import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser'

// Post interface
interface Post {
    id: number;
    title: string;
    content: string;
    slug: string;
    featuredImage?: {
        node: {
            id: number;
            sourceUrl: string;
            altText: string;
            mediaDetails: {
                width: number;
                height: number;
            };
        };
    };
}


export default function PostCard({ posts }: { posts: Post[] }) {

    const postContent = posts.map((post: Post) => (
        <article className="max-w-sm p-5  md:mt-10 rounded-lg" key={post.id}>
            {post?.featuredImage?.node?.sourceUrl && <Image
                className="rounded-lg object-cover min-h-52 max-h-52 object-center"
                src={post.featuredImage.node.sourceUrl}
                alt="featured image"
                width={500}
                height={500}
            />}

            <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl my-5 hover:text-violet-600">{post.title}</h2>
            </Link>
            <div className='line-clamp-5'>{parse(post.content)}</div>
        </article>
    ))

    return (
        postContent
    )
}