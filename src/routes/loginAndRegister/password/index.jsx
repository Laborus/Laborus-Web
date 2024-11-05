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
import styles from "../studentRegister/style.module.css";

export default function Password() {
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
          title="Digite sua senha"
          details="Digite uma senha com no mínimo 8 caracteres."
        />
        <form id="register-form" onSubmit={handleSubmit}>
          <PasswordField />

          <SubmitButton type="submit" />
        </form>
        <p className={`${styles.registerLink} ${styles.termsPrivacy}`}>
          Clicando em Criar conta, você concorda com os{" "}
          <a href="../login/">Termos de Uso</a> e confirma que você leu a nossa{" "}
          <a href="../login/">Política de Privacidade</a>.
        </p>
        <p className={styles.registerLink}>
          Já possui uma conta? <a href="../login/">Faça Login</a>.
        </p>
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
