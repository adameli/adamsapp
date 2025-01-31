
/**
 * This file contains the GraphQL queries that will be used to fetch posts from the WordPress site.
 */

// The GraphQL query to fetch all posts
export const POSTS = `
query MyQuery2($after: String, $before: String, $first: Int = null, $last: Int = null) {
  posts(after: $after, before: $before, first: $first, last: $last) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    nodes {
      content
      slug
      title
      id
      featuredImage {
        node {
          altText
          id
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
}
  `

// The GraphQL query to fetch a single post by slug. $id is a variable that will be provided at runtime
export const POST = `
query getPost($id: ID!) {
        post(id: $id, idType: SLUG) {
          slug
          title
          content
           featuredImage {
                        node {
                            id
                            sourceUrl
                            altText
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
        }
      }
`