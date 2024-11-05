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
import InputField from "../components/inputField"; // Importando InputField
import TermsAndPrivacy from "../components/termsAndPrivacy"; // Importando o novo componente

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulando uma requisição com timeout
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href="#" />
        <Title
          title="Junte-se a Laborus!"
          details="Cadastre-se na plataforma... É de graça."
        />
        <form id="register-form" onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Nome completo"
            errorMessage="O nome deve ter no máximo 50 caracteres."
          />

          <InputField
            type="text"
            name="cpf"
            placeholder="CPF"
            errorMessage="CPF inválido."
          />

          <InputField
            type="email"
            name="email"
            placeholder="E-mail"
            errorMessage="Por favor, insira um e-mail válido."
          />

          <SubmitButton type="submit" />
        </form>

        <TermsAndPrivacy />
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
