import React, { useState } from "react";
import laborusLogo from "/laborus-logotipo-42x42.png";
import studentImage from "../../../assets/images/student-image.png";
import companyImage from "../../../assets/images/company-image.png";
import schoolImage from "../../../assets/images/school-image.png";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./style.module.css";

export default function AccountChoice() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    alert(`Opção selecionada: ${selectedOption}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.groupBox}>
        <div className={styles.logo}>
          <img src={laborusLogo} alt="Logotipo Laborus" />
        </div>
        <a href="/login" className={styles.backButton}>
          <div>
            <FaArrowLeft />
          </div>
          Voltar
        </a>
        <h1 className={styles.title}>Escolha a sua conta</h1>
        <p className={styles.titleDetails}>
          Selecione a opção que corresponde ao tipo de conta que deseja.
        </p>
        <div className={styles.options}>
          <div
            className={`${styles.option} ${
              selectedOption === "estudante" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("estudante")}
          >
            <img src={studentImage} alt="Estudante" />
            <p>Estudante</p>
          </div>
          <div
            className={`${styles.option} ${
              selectedOption === "empresa" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("empresa")}
          >
            <img src={companyImage} alt="Empresa" />
            <p>Empresa</p>
          </div>
          <div
            className={`${styles.option} ${
              selectedOption === "instituicao" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("instituicao")}
          >
            <img src={schoolImage} alt="Instituição" />
            <p>Instituição</p>
          </div>
        </div>
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={!selectedOption}
        >
          Continuar
        </button>
      </div>
      <div className={styles.sideBanner}></div>
      <div id="loading-overlay" className={styles.loadingOverlay}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
