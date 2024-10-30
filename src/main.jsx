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
import AccountChoice from "./routes/register/accountChoice";
import StudentRegister from "./routes/register/studentRegister";
import SelectTags from "./routes/register/selectTags";
import ProfileDetailsCompanyAndSchool from "./routes/register/profileDetailsCompanyAndSchool";
import ProfileDetailsStudent from "./routes/register/profileDetailsStudent";
import CompanyAndSchoolRegister from "./routes/register/companyAndSchoolRegister";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
