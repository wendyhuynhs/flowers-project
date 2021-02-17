import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post.js";
import styles from "../styles/postList.scss";

const PostList = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.length !== 0 &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} />
            </div>
          );
        })}

      {posts.length === 0 && (
        <div className={styles.container}>
          <h4>No results</h4>
          <button onClick={() => getPosts()}>Go back</button>
        </div>
      )}
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
