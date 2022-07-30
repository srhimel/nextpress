import React from "react"

export default function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const uri = params.uri
  // Fetch data from external API
  const res = await fetch(`http://localhost/nextpress/wordpress/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($uri: String!) {
          postBy (uri: $uri) {
            id
            title
            content
          }
        }
      `,
      variables: {
        uri,
      },
    }),
  })
  const post = await res.json()

  // Pass data to the page via props
  return { props: { post: post?.data?.postBy } }
}
