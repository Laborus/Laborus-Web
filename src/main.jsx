import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login";
import AccountChoice from "./routes/register/accountChoice";
import StudentRegister from "./routes/register/studentRegister";
import SelectTags from "./routes/register/selectTags";
import ProfileDetailsCompanyAndSchool from "./routes/register/profileDetailsCompanyAndSchool";
import ProfileDetailsStudent from "./routes/register/profileDetailsStudent";
import CompanyAndSchoolRegister from "./routes/register/companyAndSchoolRegister";
import Password from "./routes/register/password";
import Contact from "./routes/register/contact";
import { createRoutesByRole } from "./route";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register/accountChoice", element: <AccountChoice /> },
  { path: "/register/student", element: <StudentRegister /> },
  { path: "/register/SelectTags", element: <SelectTags /> },
  { path: "/register/companyAndSchool/profileDetails", element: <ProfileDetailsCompanyAndSchool /> },
  { path: "/register/student/profileDetails", element: <ProfileDetailsStudent /> },
  { path: "/register/companyAndSchool", element: <CompanyAndSchoolRegister /> },
  { path: "/register/password", element: <Password /> },
  { path: "/register/contact", element: <Contact /> },
  createRoutesByRole("student"),
  createRoutesByRole("school"),
  createRoutesByRole("company"),
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
