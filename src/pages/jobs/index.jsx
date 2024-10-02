// src/pages/Jobs.jsx

import React, { useState, useEffect } from "react";
import NavBar from "../../components/Sidebar/navbar"; // Importando a Sidebar
import "./style.css";
import JobList from "../../components/Lists/job"; // Componente de listagem de vagas
import SearchBar from "../../components/SearchBar"; // Componente de barra de pesquisa

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Função para buscar vagas
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // Simula uma chamada à API ou lógica de dados local
    const fetchedJobs = [
      {
        id: 1,
        title: "Desenvolvedor Full Stack",
        company: "Empresa X",
        location: "São Paulo, SP",
        description:
          "Trabalhar com tecnologias modernas como React, Node.js...",
      },
      {
        id: 2,
        title: "Desenvolvedor Frontend",
        company: "Empresa Y",
        location: "Rio de Janeiro, RJ",
        description:
          "Foco em desenvolvimento com React e integração com APIs...",
      },
      // Outras vagas...
    ];
    setJobs(fetchedJobs);
    setFilteredJobs(fetchedJobs);
  };

  const handleSearch = (searchTerm) => {
    const results = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div className="jobs-page">
      <NavBar /> {/* Incluindo a Sidebar */}
      <div className="jobs-content">
        <h1 className="page-title">Vagas Disponíveis</h1>
        <SearchBar onSearch={handleSearch} />
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
}
