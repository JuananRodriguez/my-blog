import React from 'react';

export default class Container extends React.Component{
  render(){
    const {children} = this.props;
    return (
      <div className={'row'}>
        {children}
      </div>
    )
  }
}
