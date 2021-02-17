import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../public/src/components/App";
import SearchBar from "../public/src/components/SearchBar";

const mockStore = configureMockStore([]);

describe("Rendering Components", () => {
  let store;
  let component;
  it("renders App component correctly", () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it("renders SearchBar component correctly", () => {
    const store = mockStore({});
    const app = shallow(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(app).toMatchSnapshot();
  });
});
