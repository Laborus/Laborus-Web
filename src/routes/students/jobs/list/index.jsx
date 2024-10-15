import React from "react";
import JobItem from "../item";
import styles from "./list.module.css";

export default function JobList({ activeFilter }) {
  const studentsJobs = [
    {
      id: 1,
      title: "Estagiários 2/2024",
      company: "Santander",
      location: "Carapicuíba | São Paulo",
    },
  ];

  const companiesJobs = [
    {
      id: 1,
      title: "Programa Aprendiz",
      company: "Santander",
      location: "Carapicuíba | São Paulo",
    },
  ];

  return (
    <div>
      {activeFilter === "students" && (
        <ul className={styles.connectionsList}>
          {studentsJobs.map((job) => (
            <JobItem key={job.id} job={job} type="students" />
          ))}
        </ul>
      )}
      {activeFilter === "companies" && (
        <ul className={styles.connectionsList}>
          {companiesJobs.map((job) => (
            <JobItem key={job.id} job={job} type="companies" />
          ))}
        </ul>
      )}
    </div>
  );
}
