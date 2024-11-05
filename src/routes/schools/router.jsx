import { Outlet, Route, Router } from "react-router-dom";
import NavBar from "../components/Sidebar/navbar";
import './style.css';
export default function App() {
  return (
    <main className="container">
        <NavBar></NavBar>
        <Outlet/>
    </main>
  );
}