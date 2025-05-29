import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { QueryProvider } from "./services/query-client";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);

reportWebVitals();
