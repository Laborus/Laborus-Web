import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error404 from "./routes/404";
import Login from "./routes/loginAndRegister/login";
import AccountChoice from "./routes/loginAndRegister/accountChoice";
import StudentRegister from "./routes/loginAndRegister/studentRegister";
import SelectTags from "./routes/loginAndRegister/selectTags";
import ProfileDetailsCompanyAndSchool from "./routes/loginAndRegister/profileDetailsCompanyAndSchool";
import ProfileDetailsStudent from "./routes/loginAndRegister/profileDetailsStudent";
import CompanyAndSchoolRegister from "./routes/loginAndRegister/companyAndSchoolRegister";
import Password from "./routes/loginAndRegister/password";
import Contact from "./routes/loginAndRegister/contact";
import { createRoutesByRole } from "./route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    errorElement: <Error404 />,
    children: [
      { path: "/register/accountChoice", element: <AccountChoice /> },
      { path: "/register/student", element: <StudentRegister /> },
      { path: "/register/SelectTags", element: <SelectTags /> },
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
      { path: "/register/password", element: <Password /> },
      { path: "/register/contact", element: <Contact /> },
    ],
  },
  createRoutesByRole("student"),
  createRoutesByRole("school"),
  createRoutesByRole("company"),
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
