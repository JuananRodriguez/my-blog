/*** *
* Implement Gatsby's Node APIs in this file.
* See: https://www.gatsbyjs.org/docs/node-apis/
*** */
const path = require('path');
const BLOG_PATH = 'blog';

const createTagPages = (createPage, posts) => {
    const AllTagPage = path.resolve('src/templates/allTagsIndex.js');
    const OneTagPage = path.resolve('src/templates/singleTagIndex.js');
    
    const postsByTag = {};
    
    posts.forEach(({node}) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if(!postsByTag[tag]) {
                    postsByTag[tag] = []
                }
                
                postsByTag[tag].push({node})
            })
        }
    });
    
    const tags = Object.keys(postsByTag);
    
    createPage({
        path: '/tags',
        component: AllTagPage,
        context: {
            tags: tags.sort()
        }
    });
    
    tags.forEach(tagName => {
        const posts = postsByTag[tagName];
        
        createPage({
            path: `/tags/${tagName}`,
            component: OneTagPage,
            context: {
                posts,
                tagName
            }
        })
    })
};

exports.createPages= (({graphql, actions}) => {
    const { createPage } = actions;
    
    return new Promise((resolve) => {
        const blogPostTemplate = path.resolve('src/templates/blogPost.js');
        
        resolve(
            graphql(`
            query {
                allMarkdownRemark (
                sort: { order: ASC, fields: [frontmatter___date] })
                {
                    edges {
                        node {
                            frontmatter {
                                path
                                title
                                tags
                                img
                                excerpt
                            }
                        }
                    }
                }
            }
            `).then(result => {
                let posts = result.data.allMarkdownRemark.edges;
                
                // posts = posts.map((post)=> {
                //     post.node.frontmatter.path = `${BLOG_PATH}/${post.node.frontmatter.path}`;
                //     return post
                // })
                
                createTagPages(createPage, posts);
                
                posts.forEach( ({ node }, index) => {
                    createPage({
                        path : node.frontmatter.path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: node.frontmatter.path,
                            prev: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index + 1].node,
                        }
                    });
                    resolve();
                });
            })
            )
        })
    });