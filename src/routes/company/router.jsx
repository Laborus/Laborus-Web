import { Outlet, Route, Router } from "react-router-dom";
import './style.css';
import NavBar from "../../components/Sidebar/navbar";
export default function AppCompany() {
  return (
    <main className="container">
        <NavBar></NavBar>
        <Outlet/>
    </main>
  );
}