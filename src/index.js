import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App/index.js';

const root = ReactDOM.createRoot(document.getElementById("root")); // Use This
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);