import React from "react";
import { Container, Columns } from "../../elements/GridLayout";
import SectionLastProjects from "./Components/SectionLastProjects";
import SectionLastPosts from "./Components/SectionLastPosts";
import './index.scss'

const Projects = [
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


class Home extends React.Component{

  render() {
    return (
      <Container>
        <SectionLastProjects data={Projects} />
        <SectionLastPosts data={Posts}/>
      </Container>
    )
  }
}

export default Home;