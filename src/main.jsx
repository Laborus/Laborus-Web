import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./routes/router";
import Error404 from "./routes/404";
import Connections from "./routes/students/connections";
import Jobs from "./routes/students/jobs";
import HomePage from "./routes/students/home";
import Challenges from "./routes/students/challenges/index..";
import ChatPages from "./routes/students/chats";
import Login from "./routes/login";
import Register from "./routes/register/accountChoice";
import Register2 from "./routes/register/studentRegister";
import Register3 from "./routes/register/selectTags";
import Register4 from "./routes/register/profileDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/connections", element: <Connections /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/chats", element: <ChatPages /> },
      { path: "/challenges", element: <Challenges /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register2",
    element: <Register2 />,
  },
  {
    path: "/register3",
    element: <Register3 />,
  },
  {
    path: "/register4",
    element: <Register4 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
