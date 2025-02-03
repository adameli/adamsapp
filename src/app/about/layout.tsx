import React from "react";


export default function aboutLayout({ children, users }: { children: React.ReactNode, users: React.ReactNode }) {

    return (

        <section className="flex">
            {children}

            <aside className=" w-1/4 bg-gray-800 text-white p-4">
                {users}
            </aside>
        </section>

    )
}