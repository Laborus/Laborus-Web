import React from "react";
import styles from "./studentHighlight.module.css";

export default function StudentsHighlight({ title, icon, students }) {
  return (
    <section className={styles.studentsHighlight}>
      <div className={styles.titleHighlight}>
        {icon}
        <h3>{title}</h3>
      </div>
      <div className={styles.studentsHighlightList}>
        {students.map((student, index) => (
          <StudentHighlight
            key={index}
            image={student.image}
            name={student.name}
            info={student.info}
          />
        ))}
      </div>
    </section>
  );
}

function StudentHighlight({ image, name, info }) {
  return (
    <div className={styles.studentInfoHighlight}>
      <img src={image} alt={name} />
      <div className={styles.studentInfoTextContainer}>
        <p>{name}</p>
        <span>{info}</span>
      </div>
    </div>
  );
}
