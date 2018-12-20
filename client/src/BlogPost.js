import React from 'react';
import { connect, } from 'react-redux';
import Blog from './Blog';

const BlogPost = ({ blogs }) => (

  <ul>
    { 
      blogs.map(b => {
        return( <Blog key={b.id} {...b} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogPost);