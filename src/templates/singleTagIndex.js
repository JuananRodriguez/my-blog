import React from 'react';
import {graphql, Link} from 'gatsby';

const SingleTagTemplate = ({data, pageContext}) =>{
    console.log(pageContext)

    const { posts, tagName } = pageContext;
    return(
        <div>
            <div>
                Posts sobre {tagName}
            </div>
            <div>
                {
                    posts.map((post) => (
                        <div key={post.frontmatter.path}>
                            <Link to={post.frontmatter.path}>
                                {post.frontmatter.title}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SingleTagTemplate;