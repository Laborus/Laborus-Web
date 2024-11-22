// Register.jsx
import React, { useState } from "react";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import SideBanner from "../components/sideBanner";
import BackButton from "../components/backButton"; // Importando o BackButton
import PasswordField from "../components/passwordField";
import TermsAndPrivacy from "../components/termsAndPrivacy"; // Importando o novo componente

export default function Password() {
  const [isLoading, setLoading] = useState(false); // Estado de carregamento
  const [formValidity, setFormValidity] = useState({
    password: false,
  }); // Estado de validade dos campos

  const handleInputChange = (name, isValid) => {
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: isValid,
    }));
  };

  const isFormValid = Object.values(formValidity).every(Boolean); // Verifica se todos os campos são válidos

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simula carregamento
  };

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href="/" />
        <Title
          title="Digite sua senha"
          details="Digite uma senha com no mínimo 8 caracteres."
        />
        <form id="register-form" onSubmit={handleSubmit}>
          <PasswordField onValidityChange={handleInputChange} />

          <SubmitButton disabled={!isFormValid || isLoading} />
        </form>
        <TermsAndPrivacy />
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
