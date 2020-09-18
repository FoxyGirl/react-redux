import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ posts }) => {
  console.log("!!!", posts);

  if (!posts.length) {
    return <p className="text-center">There are no posts</p>;
  }

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
