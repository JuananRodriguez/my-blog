import React from 'react';
import {graphql} from 'gatsby'
import Layout from './../components/Layout';
import ListPosts from './../components/ListPosts';

const SingleTagTemplate = ({ pageContext, data }) =>{
    let TagInformation = data.allMarkdownRemark.edges[0];
    TagInformation = TagInformation ? TagInformation.node.frontmatter : {};
    const { title, img, description } = TagInformation;

    const { posts, tagName } = pageContext;
    return(
        <Layout>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <ListPosts posts={posts}/> 
            </div>
        </Layout>
    )
};

export const query = graphql`query($tagName: String!) {
                allMarkdownRemark (
                filter: { frontmatter: { type: {eq: "tag"} , fileName: {eq: $tagName} } }, 
                sort: { order: ASC, fields: [frontmatter___date] })
                {
                    edges {
                        node {
                            frontmatter {
                                title
                                img
                                description
                            }
                        }
                    }
                }
            }`;

// export const query = graphql`
//   query ($pathSlug: String!) {
//     allMarkdownRemark (
//       filter: { frontmatter: { type: {eq: $pathSlug} } },
//       sort: {order: DESC, fields: [frontmatter___date]})
//     {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date
//             excerpt
//             tags
//           }
//         }
//       }
//     }
//   }
//   `;



export default SingleTagTemplate;