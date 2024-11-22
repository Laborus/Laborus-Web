import React from "react";
import styles from "./StudentProfile.module.css"; // Importando o arquivo de estilos CSS

const StudentProfile = () => {
  const studentData = {
    profilePicture: "/user-laborus.jpeg", // Caminho da imagem (adicione a imagem do estudante)
    name: "Ana Maria",
    cpf: "534.423.121-12",
    email: "usuario.24@fatec.sp.gov.br",
    details: {
      course: "Logística",
      school: "Fatec Carapicuíba",
      location: "Carapicuíba, SP",
      about:
        "Estudante dedicada, apaixonada por logística e gestão de operações.",
    },
    contactLinks: {
      phone: "(11) 91234-5678",
      email: "ana.maria@student.com",
    },
  };

  return (
    <div className={styles.mainProfileContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src={studentData.profilePicture}
            alt="Student Avatar"
            className={styles.profilePicture}
          />
          <div className={styles.studentInfo}>
            <h1 className={styles.studentName}>{studentData.name}</h1>
            <p className={styles.studentCPF}>CPF: {studentData.cpf}</p>
            <p className={styles.studentEmail}>Email: {studentData.email}</p>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <h2>Detalhes do Perfil</h2>
          <p>
            <strong>Curso:</strong> {studentData.details.course}
          </p>
          <p>
            <strong>Instituição:</strong> {studentData.details.school}
          </p>
          <p>
            <strong>Localização:</strong> {studentData.details.location}
          </p>
          <p>
            <strong>Sobre:</strong> {studentData.details.about}
          </p>
        </div>

        <div className={styles.contactSection}>
          <h2>Contato</h2>
          <p>
            <strong>Telefone:</strong> {studentData.contactLinks.phone}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${studentData.contactLinks.email}`}>
              {studentData.contactLinks.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
