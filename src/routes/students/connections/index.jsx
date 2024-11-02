// components/Connections.jsx
import { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import FilterButtons from "./components/filterButtons";
import ConnectionList from "./components/connectionList";
import ProfileNav from "./components/profileNav";
import ProfileInfo from "./components/profileInfo";
import ProfileAbout from "./components/profileAbout";
import CoverPhoto from "./components/coverPhoto";

import styles from "./style.module.css";

import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa"; // Importando ícones

const students = [
  {
    name: "Juliane Bonfim",
    image: "/user-laborus.jpeg", ///user-laborus.jpeg
    details: [{ icon: <FaGraduationCap />, text: "Fatec Carapicuíba" }],
    buttonLabel: "Adicionar",
  },
];

const companies = [
  {
    name: "Santander",
    image: "/fatec-image.png", ///fatec-image.png
    details: [
      { icon: <FaMapMarkerAlt />, text: "Osasco | São Paulo" },
      { icon: <FaUsers />, text: "3.321 Seguidores" },
    ],
    buttonLabel: "Seguir",
  },
];

const institutions = [
  {
    name: "E.E. Dona Maria Alice",
    image: "/fatec-image.png", 
    details: [
      { icon: <FaMapMarkerAlt />, text: "Carapicuíba | São Paulo" },
      { icon: <FaUsers />, text: "3.321 Seguidores" },
    ],
    buttonLabel: "Seguir",
  },
];

export default function Connections() {
  const [activeFilter, setActiveFilter] = useState("students");

  return (
    <div className="wrapper">
      <aside className="chat-sidebar">
        <header className="chat-sidebar-header">
          <h1 className="chat-title">Conexões</h1>
          <SearchBar />
          <FilterButtons
            activeFilter={activeFilter}
            onFilterClick={setActiveFilter}
          />
        </header>

        <ConnectionList
          type="students"
          items={students}
          active={activeFilter === "students"}
        />
        <ConnectionList
          type="companies"
          items={companies}
          active={activeFilter === "companies"}
        />
        <ConnectionList
          type="institutions"
          items={institutions}
          active={activeFilter === "institutions"}
        />
      </aside>

      <main className={styles.profileContent}>
        <CoverPhoto />
        <ProfileInfo />
        <ProfileNav />
        <ProfileAbout />
      </main>
    </div>
  );
}
