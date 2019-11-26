import React from "react";
import './index.scss';
import { Link } from "gatsby";

export default class SubLink extends React.Component{

  static defaultProps = {
    to: '/'
  };

  render() {
    const { to, children, className, ...rest } = this.props;
    return (
      <Link {...rest} to={to} className={ `${className ? className : ''} sub-link`}>
        {children}
        <span className={'arrow'}>&rarr;</span>
      </Link>
    );
  }
}