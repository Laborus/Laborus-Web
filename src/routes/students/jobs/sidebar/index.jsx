import React from "react";
import SearchBar from "../../../../components/SearchBar";
import JobList from "../list";
import styles from "./sidebar.module.css";

export default function JobSidebar({ activeFilter, setActiveFilter }) {
  const handleFilterClick = (filter) => setActiveFilter(filter);

  return (
    <aside className={styles.chatSidebar}>
      <header className={styles.chatSidebarHeader}>
        <h1 className={styles.chatTitle}>Vagas</h1>
        <SearchBar className={styles.searchBar} />
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "students" ? styles.filterButtonActive : ""
            }`}
            onClick={() => handleFilterClick("students")}
          >
            Estágio
          </button>
          <button
            className={`${styles.filterButton} ${
              activeFilter === "companies" ? styles.filterButtonActive : ""
            }`}
            onClick={() => handleFilterClick("companies")}
          >
            Jovem Aprendiz
          </button>
        </div>
      </header>
      <JobList activeFilter={activeFilter} />
    </aside>
  );
}
