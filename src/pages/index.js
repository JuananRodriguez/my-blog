import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

import {connect} from 'react-redux';
import PostList from "../components/PostResume"

class HomePage extends React.PureComponent{
  
  render() {
    const { posts } = this.props;
    return (
      <Layout>
      <SEO title="Home" />






      
      {
        posts.map( post => <PostList data={post}/> )
      }
      




      
      
      
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      </Layout>
      )
    }
  }
  
  const mapStateToProps = ({posts}) =>({
    posts: posts.list
  })
  
  export default connect(mapStateToProps)(HomePage)
  