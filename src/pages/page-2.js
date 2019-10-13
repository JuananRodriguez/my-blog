import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from '../components/post-list';

const SecondPage = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;
  const { host } = location;

  return(
    <Layout>
    <SEO title="Page two" />

    {
        edges.map(edge => {
          const {frontmatter} = edge.node;
          return (
              <PostList
                host={host}
                to={frontmatter.path}
                resume={frontmatter.excerpt}
                title={frontmatter.title}
                date={frontmatter.date}
                tags={frontmatter.tags}
              />
          )
        })
    }
    
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
  