import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout";
import ListPosts from "../components/ListPosts";
import SEO from "../components/seo";

const SecondPage = ({ data }) => {
  return(
    <Layout>
    <SEO title="Page two" />

    <ListPosts posts={data.allMarkdownRemark.edges}/> 
    
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
            excerpt
            tags            
          }
        }
      }
    }
  }
  `
  
  export default SecondPage
  