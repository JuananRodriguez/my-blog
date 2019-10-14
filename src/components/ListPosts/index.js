import React from 'react';
import PropTypes from 'prop-types';
import PostResume from '../PostResume';

class ListPosts extends React.Component{
    static propTypes = {
        posts: PropTypes.array
    }

    static defaultProps = {
        posts: []
    }

    render(){
        const { posts } = this.props;
        console.log(posts)
        return(
            posts.map(edge => {
                const {frontmatter} = edge.node;
                return (
                    <PostResume
                    to={frontmatter.path}
                    resume={frontmatter.excerpt}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    tags={frontmatter.tags}
                    />
                )
            })
        )
    }
}

export default ListPosts;