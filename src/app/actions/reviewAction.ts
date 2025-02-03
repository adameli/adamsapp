'use server'



export async function getReview() {

    const res = await fetch(`https://randomuser.me/api/`)
    const data = await res.json()

    return data.results
} 