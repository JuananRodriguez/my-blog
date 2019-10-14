import React from "react";
import {createPortal} from 'react-dom';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import './PostMainImage.scss';

const PostMainImage = ({fileName, alt}) => {
    
    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
            edges {
                node {
                    fluid(maxWidth: 1920) {
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

    const container = document.getElementById('post-main-image-container');
    
    if(!image || !container) return null
    
    return createPortal(
        <div className="post-main-image">
            <Img 
            fluid={image.node.fluid}
            alt={alt || fileName}
            draggable={false} 
            />
        </div>,
         container
        )
    }
    
    
    
    export default PostMainImage;