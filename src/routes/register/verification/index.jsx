// src/components/VerificationPage.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./style.module.css";

export default function VerificationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>
        <a href="#" className={styles.backButton}>
          <div>
            <FaArrowLeft />
          </div>
          Voltar
        </a>
        <h1 className={styles.title}>Etapa de Verificação</h1>
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
          <button type="submit" className={styles.submitButton} disabled>
            Confirmar
          </button>
        </form>
        <p className={styles.registerLink}>
          Não recebeu o código? <a href="#">Reenviar.</a>
        </p>
      </div>
      <div className={styles.sideBanner}></div>
      <div id="loading-overlay" className={styles.loadingOverlay}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
