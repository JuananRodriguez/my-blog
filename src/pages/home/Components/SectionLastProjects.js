import React from "react";
import {Columns, Container} from "../../../elements/GridLayout";

export default class SectionLastProjects extends React.Component{


  render(){
    const {data} = this.props;
    return(
      <Columns component={'section'} md={12} lg={4}>
        <h2>Ultimos Proyectos</h2>
        <Container>
          { data.map(p=>(
            <Columns xs={12}>
              <h3>{p.title}</h3>
              <p>{p.title}</p>
            </Columns>
          ))
          }
        </Container>
      </Columns>
    )
  }
}