import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

import {connect} from 'react-redux';
import PostList from "../components/PostResume"

class HomePage extends React.PureComponent{
  
  render() {
    return (
      <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image fileName={"gatsby-icon.png"} />
      <Image fileName={"gatsby-astronaut.png"} />
      </div>
      </Layout>
      )
    }
  }
  
  const mapStateToProps = ({posts}) =>({
    posts: posts.list
  })
  
  export default connect(mapStateToProps)(HomePage)
  