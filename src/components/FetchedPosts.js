import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";
import Loader from "./Loader";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector((state) => state.posts.fetchedPosts);
  const isLoading = useSelector((state) => state.app.isLoading);

  console.log("isLoading = ", isLoading);

  const handleLoadPost = () => {
    dispatch(fetchPosts());
  };

  return (
    <>
      <h1>FetchedPosts</h1>
      {!fetchedPosts.length && (
        <button
          className="btn btn-primary"
          onClick={handleLoadPost}
          disabled={isLoading}
        >
          Load posts
        </button>
      )}
      {isLoading && <Loader />}
      {fetchedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default FetchedPosts;
