'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getEmployees } from '../actions/employeeAction';
import EmployeeCard from '@/components/ui/EmployeeCard';
import { Employee } from '@/types/globals';
import { cn } from '@/lib/utils';


export default function AboutPage() {

    const { data } = useQuery({
        queryKey: ['employees'],
        queryFn: getEmployees,
    })

    const employees = data?.employees.nodes

    return (
        <main className='container mx-auto max-w-5xl p-10'>
            <header>
                <h1 className='text-6xl text-center mb-10'>Meet the Team</h1>
            </header>

            <section className='grid grid-cols-1 md:grid-cols-2'>

                {employees.map((employee: Employee, index: number) => (
                    <div key={employee.id} className={cn(
                        'flex justify-center h-full max-h-[450px] ',
                        index % 2 === 0 ? ' ' : ' my-[80px]'
                    )}>
                        <EmployeeCard employee={employee} />
                    </div>
                ))}
            </section>

        </main>
    )
}
