import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  rootElement
);
