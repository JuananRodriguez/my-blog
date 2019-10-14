import React from 'react';
import PropTypes from 'prop-types';
import './PostResume.scss';
import {Link} from 'gatsby'
import Tag from '../tag';

class PostItem extends React.PureComponent{
    static propTypes = {
        to:  PropTypes.string,
        resume: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        tags: PropTypes.array,
    }

    render(){
        const { to, resume, title, date, tags } = this.props;
        const formattedDate = new Date(date);
        return(
            <div className={"post-item-wrapper"}>
                <div className={"post-item-header"}>
                   <Link to={to}>
                        <h4>{title}</h4>
                    </Link>
                </div>
                <div className={"post-item-body"}>
                    <p>{resume}</p>
                </div>
                <div className={"post-item-tags"}>
                        <p className={"date"}>{formattedDate.toLocaleDateString()}</p>
                        {tags && tags.map(tag => <Tag key={tag} to={`/tags/${tag}`}>{tag}</Tag>)}
                    </div>
            </div>
        )
    }
}

export default PostItem;