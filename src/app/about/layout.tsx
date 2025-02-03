import React from "react";


export default function aboutLayout({ children, teamInfo, reviews }: { children: React.ReactNode, teamInfo: React.ReactNode, reviews: React.ReactNode }) {

    return (

        <section className="flex">
            {children}

            <aside className="flex flex-col items-center w-1/4 bg-gray-800 text-white p-4">
                <section className='fixed flex flex-col gap-10 items-center'>

                    {teamInfo}
                    {reviews}
                </section>
            </aside>
        </section>

    )
}