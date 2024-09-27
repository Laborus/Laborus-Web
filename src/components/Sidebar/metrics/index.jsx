import React from 'react';
import './style.css'; 
import StudentsHighlight from '../../Sections/studentHighlight';
import MetricsSection from '../../Sections/metrics';

export default function StudentMetrics() {
  return (
    <aside className="sidebar-right">
      <MetricsSection />
      
      <StudentsHighlight
        title="Meu Campus"
        icon="/assets/vectors/campus-icon.svg"
        students={[
          { image: "/assets/images/fatec-image.png", name: "Fatec Carapicuíba", info: "3.320 Alunos" },
        ]}
      />
      
      <StudentsHighlight
        title="Alunos destaques"
        icon="/assets/vectors/vector_105_x2.svg"
        students={[
          { image: "/assets/images/user3-laborus.jpeg", name: "Rogério Azevedo", info: "125 pontos" },
          { image: "/assets/images/user2-laborus.jpeg", name: "Rogério Azevedo", info: "125 pontos" },
          { image: "/assets/images/user5-laborus.png", name: "Rogério Azevedo", info: "125 pontos" },
        ]}
      />
    </aside>
  );
}
