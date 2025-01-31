
import React from 'react'

import testData from '@/data/testData.json'


export default function Page() {
    console.log(testData);

    async function handleSubmit(formData: FormData) {
        'use server'
        const rawFormData = {
            name: formData.get('name'),
            age: formData.get('age')
        }

        console.log(rawFormData);

    }


    return (
        <div className='container mx-auto max-w-3xl'>

            <form className='flex flex-col' action={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className='text-black' type="text" name="name" value={'Adam'} />
                <label htmlFor="name">Age</label>
                <input className='text-black' type="text" name="age" value={24} />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {testData.map((data) => (
                    <li key={data.id}>
                        <h2>{data.name}</h2>
                        <p>{data.age}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}
