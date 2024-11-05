import React from "react";
import styles from "./style.module.css";

export default function StudentRow({ student, isSelected, onSelect }) {
  return (
    <tr
      className={`${styles.studentRow} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => e.stopPropagation()}
        />
      </td>
      <td>{student.id}</td>
      <td>
        <div className={styles.studentInfo}>
          <img src="/user-laborus.jpeg" alt="Avatar" className={styles.avatar} />
          {student.name}
        </div>
      </td>
      <td>{student.cpf}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>{student.location}</td>
      <td className={styles.actions}>...</td>
    </tr>
  );
}
