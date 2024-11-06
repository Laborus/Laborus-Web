import React, { useState } from "react";
import styles from "./style.module.css";
import JobRow from "../item";

export default function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: "#001234",
      title: "Analista de Logística",
      jobType: "ESTAGIO",
      location: "Carapicuíba",
      period: "Morning",
      modality: "Presential",
      tags: ["logística", "gestão", "operação"],
      createdAt: "2024-11-05",
    },
    {
      id: "#001235",
      title: "Desenvolvedor Front-End",
      jobType: "APRENDIZ",
      location: "São Paulo",
      period: "Afternoon",
      modality: "Remote",
      tags: ["React", "JavaScript", "HTML"],
      createdAt: "2024-10-20",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === jobs.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(jobs.map((job) => job.id));
    }
  };

  const handleDeleteSelected = () => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => !selectedIds.includes(job.id))
    );
    setSelectedIds([]);
  };

  return (
    <div className={styles.jobListContainer}>
      <header className={styles.header}>
        <h2>Vagas Criadas</h2>
        <div className={styles.actions}>
          <input
            className={styles.searchBox}
            type="text"
            placeholder="Pesquisar Vagas"
          />
          <button className={styles.addButton}>+ Adicionar Nova</button>
          <button className={styles.deleteAllButton} onClick={handleDeleteSelected}>
            Deletar Selecionadas
          </button>
        </div>
      </header>
      <table className={styles.jobTable}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedIds.length === jobs.length}
              />
            </th>
            <th>Título</th>
            <th>Tipo</th>
            <th>Localização</th>
            <th>Período</th>
            <th>Modalidade</th>
            <th>Tags</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <JobRow
              key={job.id}
              job={job}
              isSelected={selectedIds.includes(job.id)}
              onSelect={() => toggleSelect(job.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
