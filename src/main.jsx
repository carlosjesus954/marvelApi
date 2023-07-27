import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../app/css/base/index.css";
import "../app/css/layout/index.css";
import { Provider } from "./context/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
