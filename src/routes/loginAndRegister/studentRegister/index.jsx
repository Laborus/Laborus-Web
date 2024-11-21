import React, { useState } from "react";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import SideBanner from "../components/sideBanner";
import BackButton from "../components/backButton";
import InputField from "../components/inputField";
import TermsAndPrivacy from "../components/termsAndPrivacy";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValidity, setFormValidity] = useState({
    name: false,
    cpf: false,
    email: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleInputChange = (name, isValid) => {
    setFormValidity((prevValidity) => ({
      ...prevValidity,
      [name]: isValid,
    }));
  };

  const isFormValid = Object.values(formValidity).every(Boolean);

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
            onValidityChange={handleInputChange}
          />

          <InputField
            type="text"
            name="cpf"
            placeholder="CPF"
            errorMessage="CPF inválido."
            onValidityChange={handleInputChange}
          />

          <InputField
            type="email"
            name="email"
            placeholder="E-mail"
            errorMessage="Por favor, insira um e-mail válido."
            onValidityChange={handleInputChange}
          />

          <SubmitButton disabled={isLoading || !isFormValid} />
        </form>

        <TermsAndPrivacy />
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
