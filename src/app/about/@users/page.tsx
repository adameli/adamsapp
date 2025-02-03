'use client'

import React from 'react'

import { useRef, useEffect, useState } from "react";

function Counter({ stopAt = 10 }: { stopAt: number }) {
    const countRef = useRef(0);
    const [_, forceUpdate] = useState(0); // Dummy state to force re-render
    const intervalRef = useRef(null); // Store interval ID

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (countRef.current < stopAt) {
                countRef.current += 1;
                forceUpdate((n) => n + 1); // Trigger re-render
            } else {
                clearInterval(intervalRef.current); // Stop interval
            }
        }, 200);

        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [stopAt]);

    return <div>{countRef.current}</div>;
}
export default function UsersPage() {

    return (
        <div className='fixed flex flex-col jusify-center items-center text-3xl'>
            <Counter stopAt={30} />
            Projects made
        </div>
    )
}
