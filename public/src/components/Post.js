import React, { useState } from "react";
import styles from "../styles/post.scss";

import { connect } from "react-redux";

const Post = ({ post, saveEntry }) => {
  const [currentId, setCurrentId] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(post.title);
  const [currentBody, setCurrentBody] = useState(post.body);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setCurrentId(null);

    saveEntry({
      userId: post.userId,
      id: post.id,
      title: currentTitle,
      body: currentBody,
    });
  };

  return (
    <div className={styles.container}>
      {currentId === post.id && (
        <>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
            <textarea
              type="text"
              value={currentBody}
              onChange={(e) => setCurrentBody(e.target.value)}
            />
            <button>Save</button>
          </form>
        </>
      )}
      {currentId !== post.id && (
        <div className={styles.conditionalContainer}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => setCurrentId(post.id)}>Edit Entry</button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEntry: (input) => dispatch({ type: "SAVE_ENTRY", payload: input }),
  };
};

export default connect(null, mapDispatchToProps)(Post);
