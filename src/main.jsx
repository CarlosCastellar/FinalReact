import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/App";
import GlobalStatesProvider from "./context/DataContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStatesProvider>
      <App />
    </GlobalStatesProvider>
  </BrowserRouter>
);
