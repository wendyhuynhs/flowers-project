import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

// Get posts
export function* getPostsAsync(action) {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:3001/api/getPosts"
    );
    yield put({ type: "GET_POSTS_ASYNC", payload: response.data });
  } catch (e) {
    console.log("Request Failed");
    yield put({ type: "FAILED_GET_POST", payload: true });
  }
}

export function* watchGetPosts() {
  yield takeEvery("GET_POSTS", getPostsAsync);
}

export default function* rootSaga() {
  yield all([watchGetPosts()]);
}
