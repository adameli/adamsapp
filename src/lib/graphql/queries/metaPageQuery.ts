

export const metaPageQuery = `
  query pageQuery($id: ID = "") {
  page(id: $id, idType: URI) {
    title
    seo {
      canonical
      cornerstone
      focuskw
      metaDesc
      metaKeywords
      opengraphAuthor
      opengraphDescription
      opengraphTitle
      opengraphType
      opengraphUrl
      title
      twitterDescription
      twitterTitle
      twitterImage {
        sourceUrl
      }
    }
    author {
      node {
        name
        firstName
        lastName
      }
    }
  }
}
`