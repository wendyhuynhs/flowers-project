import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS_ASYNC":
      return [...state, ...action.payload];
    case "SEARCH_TITLE":
      return state.filter((post) => post.title.includes(action.payload));
    case "SAVE_ENTRY":
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case "FAILED_GET_POST":
      return ["error"];
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
});
