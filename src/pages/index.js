import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

import {connect} from 'react-redux';
import PostList from "../components/PostResume"

const Proyects = [
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  },
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  }
];

const Posts = [
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    tags: 'react',
    date: new Date(),
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  },
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    tags: 'react',
    date: new Date(),
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  },
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    tags: 'react',
    date: new Date(),
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  },
  {
    url: '/blog',
    title: "Imagen corporativa para Bears in black",
    tags: 'react',
    date: new Date(),
    img: "https://images.unsplash.com/photo-1574725954448-7fe2fe20461e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1086&q=80",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat finibus interdum. Nulla auctor pharetra tristique. Vivamus mi dolor, iaculis quis mollis ut, auctor non diam. Nulla metus ante, laoreet id fermentum vitae, mollis at risus. Pellentesque consectetur venenatis ligula in maximus. Vestibulum tincidunt vitae libero euismod efficitur. Phasellus in lacus imperdiet, posuere orci sit amet, congue erat. Nullam semper quis lorem vel pharetra"
  },
];



class HomePage extends React.PureComponent{

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
        {/*<Image fileName={"gatsby-icon.png"} />*/}
        {/*<Image fileName={"gatsby-astronaut.png"} />*/}
        {/*</div>*/}


        <section>
          <h2>Ultimos Proyectos</h2>
          { Proyects.map(p=>(
            <div>
              <h3>{p.title}</h3>
              <p>{p.title}</p>
            </div>
          ))
          }
        </section>

        <section>
          <h2>Ultimos Posts</h2>
          { Posts.map(p=>(
            <div>
              <h3>{p.title}</h3>
              <span>{p.date.toLocaleDateString()}</span>
              <span>{p.tags}</span>
              <p>{p.title}</p>
            </div>
          ))
          }
        </section>





      </Layout>
    )
  }
}

const mapStateToProps = ({posts}) =>({
  posts: posts.list
})

export default connect(mapStateToProps)(HomePage)
  