import React from "react"
import { graphql } from "gatsby";


const SecondPage = ({data}) => {
  const articles = data.allDatoCmsArticle.edges;
  return (
    <div>
      <h1>Blog</h1>
      {articles.map(({node}) => {
        return(
          <div>
          <div><h1>{node.title}</h1></div>
          <div><h1>{node.content}</h1></div>
          </div>
        )
      })}
    </div>
  )
}
 
export const query = graphql`
query {
  allDatoCmsArticle {
    edges {
      node {
        title
        content
      }
    } 
  }
}
`


export default SecondPage;