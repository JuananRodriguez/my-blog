import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import './index.scss';

class Tag extends React.PureComponent{

    static propTypes = {
        children: PropTypes.string,
        to: PropTypes.string
    }

    render(){
        const {children, to} = this.props;
        return(
            <Link to={to} className={"tag-wrapper"}>
                #{children}
            </Link>
        )
    }
}

export default Tag;