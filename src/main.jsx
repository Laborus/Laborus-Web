import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import App from "./routes/router";
import Error404 from "./routes/404";
import Connections from "./routes/students/connections";
import JobsPage from "./routes/students/jobs";
import HomePage from "./routes/students/home";
import ChatPages from "./routes/students/chats";
import ChallengesPage from "./routes/students/challenges";
import NotificationsPage from "./routes/students/notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/connections", element: <Connections /> },
      { path: "/jobs", element: <JobsPage /> },
      { path: "/chats", element: <ChatPages /> },
      { path: "/challenges", element: <ChallengesPage /> },
      { path: "/notifications", element: <NotificationsPage/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
