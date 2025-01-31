
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'
import { PostPagination } from './posts';
import { getPostsPagination } from '../actions/postActions';
import { metaDataObject } from '@/lib/utils';
import { getPageMeta } from '../actions/metaPageAction';
// import { SearchParams } from '@/types/globals';

type SearchParams = Promise<{
    cursor: string | null
    is: string
    page: string | null
}>
type Params = Promise<{ slug: string }>


export async function generateMetadata() {

    // fetch data - the about page
    const { page } = await getPageMeta('posts')

    return metaDataObject(page)
}

// app/posts/page.tsx
export default async function PostsPage(props: {
    params: Params
    searchParams: SearchParams
}) {
    const searchParams = await props.searchParams

    const {
        cursor,
        is,
        page
    } = searchParams

    const parsedPage = parseInt(page as string || '1')
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['posts', { page }],
        queryFn: () => getPostsPagination(2, cursor, is),
    })

    return (
        // HydrationBoundary is a Client Component, so hydration will happen there.
        <HydrationBoundary state={dehydrate(queryClient)}>
            {/* <Posts /> */}
            <PostPagination cursor={cursor} page={parsedPage} is={is} />
        </HydrationBoundary>
    )
}



// export default async function PostsPage() {
//     //* The GraphQL query to fetch all posts
//     const getAllPost = `
//             {
//                 posts {
//                     nodes {
//                         id
//                         title
//                         content
//                         slug
//                          featuredImage {
//                         node {
//                             id
//                             sourceUrl
//                             altText
//                             mediaDetails {
//                                 width
//                                 height
//                             }
//                         }
//                     }
//                     }
//                 }
//             }
//         `
//     try {
//         const { data } = await fetchApi(getAllPost);

//         const posts = data.posts.nodes;
//         console.log(posts);


//         return <>
//             <h1 className="text-center text-4xl mt-10">Posts</h1>
//             <div className="container mx-auto max-w-6xl flex flex-wrap justify-center">
//                 {posts.map((post: Post) => (
//                     <div className="max-w-sm p-5  mt-10 rounded-lg" key={post.id}>
//                         {post?.featuredImage?.node?.sourceUrl && <Image
//                             className="rounded-lg object-cover min-h-52 max-h-52 object-center"
//                             src={post.featuredImage.node.sourceUrl}
//                             alt="featured image"
//                             width={500}
//                             height={500}
//                         />}

//                         <Link href={`/posts/${post.slug}`}>
//                             <h2 className="text-2xl my-5 hover:text-violet-600">{post.title}</h2>
//                         </Link>
//                         <p className='line-clamp-5'>{parse(post.content)}</p>
//                     </div>
//                 ))}
//             </div>
//         </>
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         return <div>Error loading posts. Please try again later.</div>;
//     }
// }


