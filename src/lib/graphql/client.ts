import { env } from "@/env"

export default async function fetchApi(query: string, variables?: unknown) {
    const res = await fetch(env.DATABASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables
        }),
    })

    const data = await res.json()
    return data
}

export async function fetchTodo(page: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)

    // const totalPosts = parseInt(res.headers.get('X-Total-Count') || '0')
    // console.log(totalPosts);

    const data = await res.json()

    console.log(data);

    return data

}

export { fetchApi }