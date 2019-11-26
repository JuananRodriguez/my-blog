import React from "react";
import './index.scss';

export default class SectionTitle extends React.Component{

  static defaultProps = {
    component: 'h2'
  };

  render() {

    const {children, component, className, rest} = this.props;
    const Component = component;

    return(
      <Component {...rest} className={`${className ? className : ''} section-title`}>
        {children}
      </Component>
    )
  }
}