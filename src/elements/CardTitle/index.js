import React from "react";
import './index.scss';

export default class CardTitle extends React.Component{

  static defaultProps = {
    component: 'h3'
  };

  render() {

    const {children, component, className, rest} = this.props;
    const Component = component;

    return(
      <Component {...rest} className={`${className ? className : ''} card-title`}>
        {children}
      </Component>
    )
  }
}