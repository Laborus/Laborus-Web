// Register.jsx
import React, { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa"; // Importando ícones
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import LoadingOverlay from "../components/loadingOverlay";
import SideBanner from "../components/sideBanner";
import BackButton from "../components/backButton";
import styles from "./style.module.css";

export default function Contact() {
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
          title="Links de Contato"
          details="Preencha os campos abaixo para adicionar os links de contato ao seu perfil."
        />
        <form id="register-form" onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaGlobe className={styles.icon} />
            </div>
            <input
              type="url"
              name="website"
              placeholder="URL do seu site"
              required
            />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaPhone className={styles.icon} />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Número de telefone"
              required
            />
          </div>

          <div className={styles.inputBox}>
            <div className={styles.boxIcon}>
              <FaEnvelope className={styles.icon} />
            </div>
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
