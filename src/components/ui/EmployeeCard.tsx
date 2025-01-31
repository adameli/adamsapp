'use client'

import React from 'react'
import { Employee } from '@/types/globals'
import Image from 'next/image'

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <div className='shadow-xl  flex flex-col'>
            <div >
                {employee?.featuredImage?.node?.sourceUrl && <Image
                    className="object-cover max-w-80 max-h-80 object-top"
                    src={employee.featuredImage.node.sourceUrl}
                    alt="featured image"
                    width={500}
                    height={500}
                />}
            </div>
            <div className='p-5 flex flex-col justify-between flex-1'>
                <div className='flex justify-between'>
                    <h2>{employee.employeeDetails.firstname} {employee.employeeDetails.lastname}</h2>
                    <p>{employee.employeeDetails.role}</p>
                </div>

                <address className='flex justify-between'>
                    <p>{employee.employeeDetails.email}</p>
                    <p>{employee.employeeDetails.phonenumber}</p>
                </address>
            </div>
        </div>
    )
}
