import React from 'react'
import {graphql, Link} from 'gatsby'

const Template = ({data, pageContext}) => {
    const {next, prev} = pageContext;

    const {markdownRemark} = data;
    const title = markdownRemark.frontmatter.title;
    const html = markdownRemark.html;

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
            {
                prev && 
                <Link to={prev.frontmatter.path}>
                    Anterior Post
                </Link>
            }
            
            {
                next && 
                <Link to={next.frontmatter.path}>
                    Siguiente Post
                </Link>
            }
        </div>
    )
}

export const query = graphql`
 query($pathSlug: String!) {
     markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
         html
         frontmatter {
             title
         }
     }
 }
`

export default Template