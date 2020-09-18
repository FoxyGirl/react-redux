import React from "react";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-6 pb-5">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Posts />
        </div>
        <div className="col">
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
