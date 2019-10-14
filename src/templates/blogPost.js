import React from 'react'
import Layout from '../components/Layout';
import Image from '../components/image';
import PostMainImage from '../components/PostMainImage';
import SEO from '../components/seo';
import {graphql, Link} from 'gatsby'
import './blogPost.scss';

const Template = ({data, pageContext, ...rest}) => {

    console.log(pageContext);
    console.log(rest);



    const {next, prev} = pageContext;

    const {markdownRemark} = data;
    const title = markdownRemark.frontmatter.title;
    const image = markdownRemark.frontmatter.img;
    const html = markdownRemark.html;

    return (
        <Layout preMain = {
            <div id={"post-main-image-container"}/>
        }>
            <SEO title={title} />
            <PostMainImage fileName={image} />
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
        </Layout>
    )
}

export const query = graphql`
 query($pathSlug: String!) {
     markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
         html
         frontmatter {
             title
             img
         }
     }
 }
`

export default Template