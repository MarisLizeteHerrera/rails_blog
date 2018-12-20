import React from 'react';
import { connect, } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import BlogForm from './BlogForm';
import { deleteBlog, } from "../reducers/blogs";

class BlogView extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }
  
  handleDelete = () => {
    const { blog, dispatch, history: { push, }, } = this.props;
    dispatch(deleteBlog(blog.id));
    push("/blogs");
  }

  render() {
    const { showForm, } = this.state;
    const { blog = {}, } = this.props;

    return (
      <Container>
        <Link to="/blogs">View All Blogs</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <BlogForm {...blog} closeForm={this.toggleForm} />
            :
            <div>
              <Header as="h3" textAlign="center">{blog.name}</Header>
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{blog.desc}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{blog.author}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            
            <Button onClick={this.toggleForm}>
              { showForm ? 'Cancel' : 'Edit' }
            </Button>
            <Button onClick={this.handleDelete}>
              Delete
            </Button>
            </div>
          }
      </Container>
    )
  }
};

const mapStateToProps = (state, props) => {
  return { blog: state.blogs.find( a => a.id === parseInt(props.match.params.id, )) };
}

export default connect(mapStateToProps)(BlogView);


