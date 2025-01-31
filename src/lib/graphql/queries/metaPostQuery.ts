

export const metaPost = `
 query metaPost($id: ID = "") {
  post(id: $id, idType: SLUG) {
    seo {
      canonical
      cornerstone
      focuskw
      metaDesc
      metaKeywords
      opengraphAuthor
      opengraphDescription
      opengraphImage {
        altText
        sourceUrl
      }
      opengraphUrl
      opengraphType
      opengraphTitle
      opengraphSiteName
      opengraphPublisher
      twitterDescription
      title
      twitterImage {
        altText
        sourceUrl
      }
      twitterTitle
    }
    author {
      node {
        lastName
        name
        firstName
      }
    }
  }
}
`