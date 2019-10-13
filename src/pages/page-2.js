import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => {
  const {edges} = data.allMarkdownRemark;
  console.log(edges);
  return(
    <Layout>
    <SEO title="Page two" />
    
    {edges.map(edge => {
      const {frontmatter} = edge.node;
      return (
        <div key={frontmatter.path}>
          <Link to={frontmatter.path}>
            {frontmatter.title}
          </Link>
        </div>
      )
    })}
    
    
    
    
    
    <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
  }
   
  export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark ( sort: {order: DESC, fields: [frontmatter___date]})
    {
      edges {
        node {
          frontmatter {
            title
            path
            date
            
          }
        }
      }
    }
  }
  `
  
  export default SecondPage
  