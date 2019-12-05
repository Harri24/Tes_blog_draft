import React from "react"
import { Link } from "gatsby"


const PostPreview = ({ node, extraClasses }) => {
  const { path, title, date, tags = [] } = node.frontmatter

  const isBlog = tags.includes('blog')

  return (
    <article key={node.id}>
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <div>
        <div>{date}</div>x
        {isBlog &&
            <Link>
              <div>Blog</div>
            </Link>}
          </div>
      <p>{node.excerpt}</p>
      <p>
        <Link to={path}>Read more</Link>
      </p>
    </article>
  )
}

export default PostPreview;