import React, { useState } from "react";
import { connect } from "react-redux";
import { Hint } from "react-autocomplete-hint";
import styles from "../styles/searchBar.scss";

const SearchBar = ({ searchPost, listOfAutofillOptions }) => {
  const [userInput, setUserInput] = useState("");

  const onInputChange = (e) => {
    e.persist();
    setUserInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchPost(userInput);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onFormSubmit}>
        <Hint options={listOfAutofillOptions} allowTabFill="true">
          <input
            type="text"
            name="title"
            value={userInput}
            placeholder="Search title"
            onChange={onInputChange}
          />
        </Hint>
        <button>Submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = ({ posts }) => {
  return { posts, listOfAutofillOptions: posts.map((post) => post.title) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (input) => dispatch({ type: "SEARCH_TITLE", payload: input }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
