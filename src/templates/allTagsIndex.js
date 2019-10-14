import React from 'react';
import {Link} from 'gatsby';
import Layout from './../components/Layout';

const AllTagsTemplate = ({data, pageContext}) =>{
    const {tags} = pageContext;
    return(
        <Layout>
            <div>
                {tags.map((tagName) => {
                return (
                    <div key={tagName}>
                        <Link to={`/tags/${tagName}`}>
                            {tagName}
                        </Link>
                    </div>
                )
                })}
            </div>
        </Layout>
    )
}


export default AllTagsTemplate;