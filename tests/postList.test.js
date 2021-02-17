import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import PostList from "../public/src/components/PostList";

const mockStore = configureMockStore([]);

describe("Post List Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      posts: [],
    });
    store.clearActions();

    component = renderer.create(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
  });

  it(" should render state from store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
