'use client'

import { getOnePost } from "@/app/actions/postActions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import parse from "html-react-parser";

interface Post {
    id: number;
    title: string;
    content: string;
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

export default function PostComponent({ slug }: { slug: string }) {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['post', slug],
        queryFn: () => getOnePost(slug),
    })

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching posts</div>;

    const post: Post = data.post;


    return (
        <main className="container mx-auto max-w-5xl p-10">
            <article className="mt-10 rounded-lg flex flex-col " key={post.id}>
                {post?.featuredImage?.node?.sourceUrl && <Image
                    className="rounded-lg object-cover object-center max-h-96 grow w-full"
                    src={post.featuredImage.node.sourceUrl}
                    alt="featured image"
                    width={500}
                    height={500}
                />}

                <h1 className="text-2xl my-5 ">{post.title}</h1>
                {parse(post.content)}
            </article>
        </main>
    )
}