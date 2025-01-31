'use server'

import fetchApi from "@/lib/graphql/client"
import { EMPLOYEES } from "@/lib/graphql/queries/employeeQuery"

export async function getEmployees() {

    const res = await fetchApi(EMPLOYEES)
    const data = res.data

    return data
} 