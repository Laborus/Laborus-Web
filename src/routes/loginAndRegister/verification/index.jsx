// src/components/VerificationPage.jsx
import React from "react";
import Container from "../components/container";
import GroupBox from "../components/groupBox";
import Logo from "../components/logo";
import Title from "../components/title";
import SubmitButton from "../components/submitButton";
import SideBanner from "../components/sideBanner";
import LoadingOverlay from "../components/loadingOverlay";
import BackButton from "../components/backButton"; // Importando o BackButton
import styles from "./style.module.css";

export default function VerificationPage() {
  return (
    <Container>
      <GroupBox>
        <Logo />
        <BackButton href="#" />
        <Title title="Etapa de Verificação" />
        <p className={styles.titleDetails}>
          Enviamos um código de verificação para{" "}
          <strong>usuario@gmail.com</strong>.
        </p>
        <form id="otp-form" action="/verify-otp" method="post">
          <div className={styles.otpContainer}>
            <input
              type="text"
              name="otp1"
              maxLength="1"
              className={styles.otpInput}
              required
            />
            <input
              type="text"
              name="otp2"
              maxLength="1"
              className={styles.otpInput}
              required
            />
            <input
              type="text"
              name="otp3"
              maxLength="1"
              className={styles.otpInput}
              required
            />
            <input
              type="text"
              name="otp4"
              maxLength="1"
              className={styles.otpInput}
              required
            />
          </div>
          <SubmitButton type="submit" />
        </form>
        <p className={styles.registerLink}>
          Não recebeu o código? <a href="#">Reenviar.</a>
        </p>
      </GroupBox>
      <SideBanner />
      <LoadingOverlay />
    </Container>
  );
}
