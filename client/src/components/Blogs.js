import React from 'react';
import BlogForm from './BlogForm';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getBlogs, } from '../reducers/blogs';
import { Container, Header, Card, Button } from 'semantic-ui-react';

class Blogs extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  blogs = () => {
    let { blogs } = this.props;
    return blogs.map( blog =>
      <Card key={ blog.id }>
        <Card.Content>
          <Card.Header>
            {blog.name}
          </Card.Header>
          <Card.Description>
            { blog.desc }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>
            View Blog
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { showForm, } = this.state;

    return (
      <Container>
        <Header as="h3" textAlign="center">Blogs</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
            <BlogForm closeForm={this.toggleForm} />
          :
            <Card.Group itemsPerRow={4}>
            { this.blogs() }
            </Card.Group>
        }
        </Container>
      )
    }
  }


const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}


export default connect(mapStateToProps)(Blogs);