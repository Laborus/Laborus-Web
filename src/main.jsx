import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./routes/router";
import Error404 from "./routes/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      { path: "/", element: <HomePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
