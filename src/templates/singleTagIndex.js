import React from 'react';
import Layout from './../components/Layout';
import ListPosts from './../components/ListPosts';

const SingleTagTemplate = ({pageContext}) =>{
    console.log(pageContext)

    const { posts, tagName } = pageContext;
    return(
        <Layout>
            <div>
                Posts sobre {tagName}
            </div>
            <div>
                <ListPosts posts={posts}/> 
            </div>
        </Layout>
    )
}

export default SingleTagTemplate;