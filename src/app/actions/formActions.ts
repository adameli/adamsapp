'use server'

import { fetchTodo } from "@/lib/graphql/client"

export async function getTodos({ pageParam }: { pageParam: number }) {

    console.log(pageParam);

    try {
        const res = await fetchTodo(pageParam)

        return res
    } catch (e) {
        console.log(e);

    }
}