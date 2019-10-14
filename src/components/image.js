import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({fileName}) => {
  const data = useStaticQuery(graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `)

    const image = data.allImageSharp.edges.find(img => {
      return img.node.fluid.originalName === fileName
    })

    if(!image) return null

    return <Img fluid={image.node.fluid}
                alt={fileName}
                draggable={false} 
            />
}

export default Image
