import React from 'react';
import {graphql, Link} from 'gatsby';

const AllTagsTemplate = ({data, pageContext}) =>{
    const {tags} = pageContext;
    return(
        <div>
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
        </div>
    )
}

export default AllTagsTemplate;