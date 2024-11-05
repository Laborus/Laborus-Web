import App from "./routes/students/router";
import Error404 from "./routes/404";
import Connections from "./routes/students/connections";
import JobsPage from "./routes/students/jobs";
import HomePage from "./routes/students/home";
import ChatPages from "./routes/students/chats";
import ChallengesPage from "./routes/students/challenges";
import NotificationsPage from "./routes/students/notifications";
import HomePageSchool from "./routes/schools/home";
import AppSchool from "./routes/students/router";
import StudentsPageSchool from "./routes/schools/students";

export const createRoutesByRole = (role) => {
  switch (role) {
    case "student":
      return {
        path: `/${role}`,
        element: <App />,
        errorElement: <Error404 />,
        children: [
          { path: "", element: <HomePage /> },
          { path: "connections", element: <Connections /> },
          { path: "jobs", element: <JobsPage /> },
          { path: "chats", element: <ChatPages /> },
          { path: "challenges", element: <ChallengesPage /> },
          { path: "notifications", element: <NotificationsPage /> },
        ],
      };
    case "school":
      return {
        path: `/${role}`,
        element: <AppSchool />,
        errorElement: <Error404 />,
        children: [
          { path: `/${role}`, element: <HomePageSchool /> },
          { path: `/${role}/students`, element: <StudentsPageSchool /> },
        ],
      };
    default:
      return null;
  }
};
