import React from "react";
import styles from "./SchoolProfile.module.css"; // Importando o arquivo de estilos CSS

const SchoolProfile = () => {
  const schoolData = {
    profilePicture: "/fatec-image.png", // Caminho da imagem (adicione a sua própria imagem)
    name: "Faculdade Exemplo",
    cnpj: "12.345.678/0001-90", // Caso a escola tenha CNPJ
    email: "contato@faculdade.com",
    details: {
      location: "São Paulo, SP",
      about:
        "Faculdade líder em educação, com 20 anos de experiência oferecendo cursos de graduação e pós-graduação.",
      courses: [
        "Engenharia de Software",
        "Administração",
        "Psicologia",
        "Medicina",
        "Direito",
      ],
    },
    contactLinks: {
      website: "https://www.faculdade.com.br",
      phone: "(11) 1234-5678",
      email: "suporte@faculdade.com.br",
    },
  };

  return (
    <div className={styles.mainProfileContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src={schoolData.profilePicture}
            alt="School Logo"
            className={styles.profilePicture}
          />
          <div className={styles.schoolInfo}>
            <h1 className={styles.schoolName}>{schoolData.name}</h1>
            <p className={styles.schoolCNPJ}>CNPJ: {schoolData.cnpj}</p>
            <p className={styles.schoolEmail}>Email: {schoolData.email}</p>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <h2>Detalhes do Perfil</h2>
          <p>
            <strong>Localização:</strong> {schoolData.details.location}
          </p>
          <p>
            <strong>Sobre:</strong> {schoolData.details.about}
          </p>
          <p>
            <strong>Cursos Oferecidos:</strong>
            <ul className={styles.listCourses}>
              {schoolData.details.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </p>
        </div>

        <div className={styles.contactLinks}>
          <h2>Links de Contato</h2>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={schoolData.contactLinks.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {schoolData.contactLinks.website}
            </a>
          </p>
          <p>
            <strong>Telefone:</strong> {schoolData.contactLinks.phone}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${schoolData.contactLinks.email}`}>
              {schoolData.contactLinks.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
