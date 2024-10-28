import React from "react";
import "./style.css";
import StudentsHighlight from "./studentHighlight";
import MetricsSection from "./metrics";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export default function StudentMetrics() {
  return (
    <aside className="sidebar-right">
      <div className="contentSidebar">
        <MetricsSection />
        <StudentsHighlight
          title="Meu Campus"
          icon={<FaRegBuilding />}
          students={[
            {
              image: "src/assets/images/fatec-image.png",
              name: "Fatec Carapicuíba",
              info: "3.320 Alunos",
            },
          ]}
        />

        <StudentsHighlight
          title="Alunos destaques"
          icon={<MdOutlineSchool />}
          students={[
            {
              image: "src/assets/images/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
            {
              image: "src/assets/images/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
            {
              image: "src/assets/images/user-laborus.jpeg",
              name: "Rogério Azevedo",
              info: "125 pontos",
            },
          ]}
        />
      </div>
    </aside>
  );
}
