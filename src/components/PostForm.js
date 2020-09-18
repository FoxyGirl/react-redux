import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends Component {
  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;

    if (!title) {
      const { showAlert } = this.props;

      return showAlert("Empty title of post!!");
    }

    const newPost = {
      id: Date.now().toString(),
      title,
    };
    const { createPost } = this.props;
    createPost(newPost);
    this.setState({ title: "" });
    console.log(newPost);
  };

  handleChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  render() {
    const { title } = this.state;
    const { textAlert } = this.props;

    return (
      <div>
        <h1>PostForm</h1>
        <form onSubmit={this.handleSubmit}>
          {textAlert && <Alert text={textAlert} />}
          <div className="form-group">
            <label htmlFor="title">Post title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              name="title"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  textAlert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
