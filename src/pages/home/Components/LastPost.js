import React from "react";
import {Columns} from "../../../elements/GridLayout";
import CardTitle from "../../../elements/CardTitle";
import './LastPost.scss';


export default class LastPost extends React.Component{


  render() {
    const { data, ...rest } = this.props;
    const { title, date, tags, excerpt} = data;
    return(
      <Columns {...rest} className={'last-post'}>
        <CardTitle>{title}</CardTitle>
        <span>{date.toLocaleDateString()}</span>
        <span>{tags}</span>
        <p className={'content'}>{excerpt}</p>
      </Columns>
    )
  }

}