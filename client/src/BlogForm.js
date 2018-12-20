import React from 'react';
import { connect, } from 'react-redux';
import { addBlog } from './reducers/blogs';

class BlogForm extends React.Component {
  initialState = { 
    name: '', 
    desc: '',  
  };
  //help

  state = {...this.initialState};

  componentDidMount() {
    if(this.props.id)
    this.setState({ ...this.props, });
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const app = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(app));
    closeForm();
  }

  render() {
    const { name, desc, } = this.props; //help props state

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="desc"
          defaultValue={desc}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }

}

export default connect(mapStateToProps)(BlogForm);