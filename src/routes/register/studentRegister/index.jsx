// Register.jsx
import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "/laborus-logotipo-42x42.png";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulando uma requisição com timeout
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <img src={logo} alt="Logotipo Laborus" />
        </div>
        <h1 className={styles.title}>Junte-se a Laborus!</h1>
        <p className={styles.titleDetails}>
          Cadastre-se na plataforma... É de graça.
        </p>

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

          <button type="submit" className={styles.submitButton}>
            Continuar
          </button>
        </form>

        <p className={`${styles.registerLink} ${styles.termsPrivacy}`}>
          Clicando em Criar conta, você concorda com os{" "}
          <a href="../login/login.html">Termos de Uso</a> e confirma que você
          leu a nossa <a href="../login/login.html">Política de Privacidade</a>.
        </p>
        <p className={styles.registerLink}>
          Já possui uma conta? <a href="../login/login.html">Faça Login</a>.
        </p>
      </div>

      <div className={styles.sideBanner}></div>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loader}></div>
        </div>
      )}
    </div>
  );
}
