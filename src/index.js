import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CalcContextProvider } from "./contexts/CalcContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalcContextProvider>
      <App />
    </CalcContextProvider>
  </React.StrictMode>
);
