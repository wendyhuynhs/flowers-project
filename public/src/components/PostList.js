import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./Post.js";

const PostList = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch({ type: "GET_POSTS" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
