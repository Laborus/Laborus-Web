import React from "react";
import styles from "./style.module.css";

export default function JobRow({ job, isSelected, onSelect }) {
  return (
    <tr
      className={`${styles.jobRow} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => e.stopPropagation()}
        />
      </td>
      <td>{job.title}</td>
      <td>{job.jobType}</td>
      <td>{job.location}</td>
      <td>{job.period}</td>
      <td>{job.modality}</td>
      <td>{job.tags.join(", ")}</td>
      <td>{new Date(job.createdAt).toLocaleDateString()}</td>
      <td className={styles.actions}>...</td>
    </tr>
  );
}
