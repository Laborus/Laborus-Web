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
import styles from "./style.module.css";

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
          <div className={styles.inputBox}>
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              maxLength="50"
              required
            />
            <span
              className={`${styles.error} ${styles.nameError}`}
              style={{ display: "none" }}
            >
              O nome deve ter no máximo 50 caracteres.
            </span>
          </div>

          <div className={styles.inputBox}>
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              maxLength="14"
              required
            />
            <span
              className={`${styles.error} ${styles.cpfError}`}
              style={{ display: "none" }}
            >
              CPF inválido.
            </span>
          </div>

          <div className={styles.inputBox}>
            <input type="email" name="email" placeholder="E-mail" required />
            <span
              className={`${styles.error} ${styles.emailError}`}
              style={{ display: "none" }}
            >
              Por favor, insira um e-mail válido.
            </span>
          </div>

          <SubmitButton type="submit" />
        </form>
        <p className={`${styles.registerLink} ${styles.termsPrivacy}`}>
          Clicando em Criar conta, você concorda com os{" "}
          <a href="../login/login.html">Termos de Uso</a> e confirma que você
          leu a nossa <a href="../login/login.html">Política de Privacidade</a>.
        </p>
        <p className={styles.registerLink}>
          Já possui uma conta? <a href="../login/login.html">Faça Login</a>.
        </p>
      </GroupBox>
      <SideBanner />
      {isLoading && <LoadingOverlay />}
    </Container>
  );
}
