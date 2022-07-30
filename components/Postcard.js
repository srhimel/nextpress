import Link from "next/link"

export default function PostCard({ post }) {
  return (
    <Link href={post.uri}>
      <a>
        <h3>{post.title} &rarr;</h3>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
      </a>
    </Link>
  )
}
