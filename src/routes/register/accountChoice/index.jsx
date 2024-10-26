// pages/AccountChoice.jsx
import React, { useState } from "react";
import Logo from "../components/logo";
import BackButton from "../components/backButton";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import SideBanner from "../components/sideBanner";

import studentImage from "../../../assets/images/student-image.png";
import companyImage from "../../../assets/images/company-image.png";
import schoolImage from "../../../assets/images/school-image.png";

import styles from "./style.module.css"; // Mantendo o CSS da página

export default function AccountChoice() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    alert(`Opção selecionada: ${selectedOption}`);
  };

  const backButtonUrl = "/login"; // Pode ser alterado dinamicamente

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href={backButtonUrl} />
        <Title
          title="Escolha a sua conta"
          details="Selecione a opção que corresponde ao tipo de conta que deseja."
        />

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

        <SubmitButton onClick={handleSubmit} disabled={!selectedOption} />
      </GroupBox>

      <SideBanner />
      <LoadingOverlay />
    </Container>
  );
}
