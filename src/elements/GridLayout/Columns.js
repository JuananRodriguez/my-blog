import React from "react";


const parsePropsToClassName = (xs, sm, md, lg, xl) => {
  let className = '';
  if(xs) className += ` col-xs-${xs}`;
  if(sm) className += ` col-sm-${sm}`;
  if(md) className += ` col-md-${md}`;
  if(lg) className += ` col-lg-${lg}`;
  if(xl) className += ` col-xl-${xl}`;
  return className;
};


export default class GridLayout extends React.Component{
  static defaultProps = {
    component: 'div',
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined
  };

  render() {
    const { children, component, className, xs, sm, md, lg, xl } = this.props;
    const Component = component;
    const gridClasses = parsePropsToClassName(xs, sm, md, lg, xl);
    return(
      <Component className={`grid-layout ${className ? className : ''} ${gridClasses}`}>
        {children}
      </Component>
    )
  }
}

