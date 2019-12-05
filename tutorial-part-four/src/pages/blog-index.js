import React from "react"
import { graphql } from "gatsby"
import PostPreview from "../components /PostPreview"
import Layout from "../components /layout"


export default ({ data }) => {
  return (
    <Layout>
      <div>
          <h1>Blog posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview node={node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },

    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }`