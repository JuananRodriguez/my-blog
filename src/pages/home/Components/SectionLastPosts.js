import { Columns, Container } from "../../../elements/GridLayout";
import SectionTitle from '../../../elements/SectionTitle'
import React from "react";
import SubLink from "../../../elements/SubLink";
import LastPost from "./LastPost";

export default class SectionLastPosts extends React.Component{


  render() {
    const {data} = this.props;
    return(
      <Columns component={'section'} md={12} lg={8}>

        <SectionTitle>
          Últimos Posts
          <SubLink to = {'/'}> Ver todos los posts </SubLink>
        </SectionTitle>

        <Container>
          { data.map(item => <LastPost data={item} md={12} lg={6}/>)}
        </Container>

      </Columns>
    )
  }
}