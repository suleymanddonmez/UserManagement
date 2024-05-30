import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./utils/Router";
import Store from "./store/Store";
import "./assets/css/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <Router />
    </Provider>
  </BrowserRouter>
);
