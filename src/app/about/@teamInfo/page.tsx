

import React from 'react'


export default async function TeamInfoPage() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <section className='flex flex-col gap-10'>

            <div className=' flex flex-col jusify-center items-center text-3xl'>
                <p>30</p>
                Projects made
            </div>
            <div className='flex flex-col jusify-center items-center text-3xl'>
                <p>300</p>
                Happy customers
            </div>
        </section>
    )
}
