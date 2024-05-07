import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter as ReactRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReactRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactRouter>
);
