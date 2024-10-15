import React from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./item.module.css";

export default function JobItem({ job, type }) {
  return (
    <li className={styles.connectionListItem}>
      <img src="src/assets/images/fatec-image.png" alt="Job Profile" />
      <div className={styles.connectionInfo}>
        <h2 className={styles.nameConnection}>{job.title}</h2>
        <div className={styles.schoolInfo}>
          <FaBriefcase />
          <span>{job.company}</span>
        </div>
        <div className={styles.schoolInfo}>
          <FaMapMarkerAlt />
          <span>{job.location}</span>
        </div>
      </div>
      {type === "students" && <button className={styles.cancelBtn}>&times;</button>}
      {type === "companies" && <button className={styles.confirmBtn}>Candidatar-se</button>}
    </li>
  );
}
