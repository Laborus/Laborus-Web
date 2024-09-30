import React from 'react';
import './style.css'; 

export default function StudentsHighlight({ title, icon, students }) {
  return (
    <section className="students-highlight">
      <div className="title-highlight">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="students-highlight-list">
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
    <div className="student-info-highlight">
      <img src={image} alt={name} />
      <div className="student-info-text-container">
        <p>{name}</p>
        <span>{info}</span>
      </div>
    </div>
  );
}
