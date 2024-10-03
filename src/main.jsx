import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/students/home";
import Jobs from "./pages/jobs";
import Connections from "./pages/connections";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Connections />
  </StrictMode>
);

// <HomePage />
// <Jobs />
