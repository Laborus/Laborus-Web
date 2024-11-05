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
import Login from "./routes/loginAndRegister/login";
import AccountChoice from "./routes/loginAndRegister/accountChoice";
import StudentRegister from "./routes/loginAndRegister/studentRegister";
import SelectTags from "./routes/loginAndRegister/selectTags";
import ProfileDetailsCompanyAndSchool from "./routes/loginAndRegister/profileDetailsCompanyAndSchool";
import ProfileDetailsStudent from "./routes/loginAndRegister/profileDetailsStudent";
import CompanyAndSchoolRegister from "./routes/loginAndRegister/companyAndSchoolRegister";
import Password from "./routes/loginAndRegister/password";
import Contact from "./routes/loginAndRegister/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register/accountChoice",
    element: <AccountChoice />,
  },
  {
    path: "/register/student",
    element: <StudentRegister />,
  },
  {
    path: "/register/SelectTags",
    element: <SelectTags />,
  },
  {
    path: "/register/companyAndSchool/profileDetails",
    element: <ProfileDetailsCompanyAndSchool />,
  },
  {
    path: "/register/student/profileDetails",
    element: <ProfileDetailsStudent />,
  },
  {
    path: "/register/companyAndSchool",
    element: <CompanyAndSchoolRegister />,
  },
  {
    path: "/register/password",
    element: <Password />,
  },
  {
    path: "/register/contact",
    element: <Contact />,
  },
  {
    path: "/student",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/student", element: <HomePage /> },
      { path: "/student/connections", element: <Connections /> },
      { path: "/student/jobs", element: <JobsPage /> },
      { path: "/student/chats", element: <ChatPages /> },
      { path: "/student/challenges", element: <ChallengesPage /> },
      { path: "/student/notifications", element: <NotificationsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
