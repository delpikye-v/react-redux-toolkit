import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-pagination-z/build/styles.css";

import { Provider } from "react-redux";
import App from "./App";
import store from "./service/store";
import AppService from "./service";

AppService.register();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
