

export const EMPLOYEES = `
    query employees {
    employees {
        nodes {
        slug
        title
        id
        featuredImage {
            node {
            altText
            sourceUrl
            }
        }
        employeeDetails {
            email
            firstname
            lastname
            phonenumber
            role
        }
        }
    }
    }
`