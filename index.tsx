import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // if you have Tailwind CSS file

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
