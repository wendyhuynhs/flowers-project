import React from "react";
import ReactDOM from "react-dom";
// import { render, screen } from "@testing-library/react";

import App from "./components/App.js";

it("renders the App component successfully", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
