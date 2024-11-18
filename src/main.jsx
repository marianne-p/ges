import React from "react";
import { createRoot } from "react-dom/client"; // Use createRoot for React 18+
import "./index.css";
import App from "./App.jsx";

// Create a root and render the app
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add class after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

