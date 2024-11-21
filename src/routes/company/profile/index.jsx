import React from "react";
import styles from "./CompanyProfile.module.css"; // Importando o arquivo de estilos CSS

const CompanyProfile = () => {
  const companyData = {
    profilePicture: "/user-laborus.jpeg", // Caminho da imagem (adicione a sua própria imagem)
    name: "Empresa Exemplo",
    cnpj: "12.345.678/0001-90",
    email: "contato@empresa.com",
    details: {
      location: "São Paulo, SP",
      about:
        "Empresa líder em soluções tecnológicas inovadoras, com 10 anos de experiência no mercado.",
    },
    contactLinks: {
      website: "https://www.empresa.com.br",
      phone: "(11) 1234-5678",
      email: "suporte@empresa.com.br",
    },
  };

  return (
    <div className={styles.mainProfileContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src={companyData.profilePicture}
            alt="Company Logo"
            className={styles.profilePicture}
          />
          <div className={styles.companyInfo}>
            <h1 className={styles.companyName}>{companyData.name}</h1>
            <p className={styles.companyCNPJ}>CNPJ: {companyData.cnpj}</p>
            <p className={styles.companyEmail}>Email: {companyData.email}</p>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <h2>Detalhes do Perfil</h2>
          <p>
            <strong>Localização:</strong> {companyData.details.location}
          </p>
          <p>
            <strong>Sobre:</strong> {companyData.details.about}
          </p>
        </div>

        <div className={styles.contactLinks}>
          <h2>Links de Contato</h2>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={companyData.contactLinks.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyData.contactLinks.website}
            </a>
          </p>
          <p>
            <strong>Telefone:</strong> {companyData.contactLinks.phone}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${companyData.contactLinks.email}`}>
              {companyData.contactLinks.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
