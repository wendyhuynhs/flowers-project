import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/postList.scss";
import Post from "./Post.js";

const PostList = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.length > 1 &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <Post post={post} />
            </div>
          );
        })}

      {posts[0] === "error" && (
        <div className={styles.error}>Error Loading Posts</div>
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
