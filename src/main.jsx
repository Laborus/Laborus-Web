import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/students/home";
import Jobs from "./pages/jobs";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Jobs />
  </StrictMode>
);

// <HomePage />
// <Jobs />
