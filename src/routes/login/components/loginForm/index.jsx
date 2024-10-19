import React from "react";
import styles from "./LoginForm.module.css";
import InputField from "../inputField";
import PasswordField from "../passwordField";

export default function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h1 className={styles.title}>Bem-vindo(a) de volta!</h1>
      <p className={styles.titleDetails}>
        É bom vê-lo(a) novamente! Digite suas informações.
      </p>

      <InputField
        type="email"
        name="email"
        placeholder="E-mail"
        errorMessage="Os campos não podem estar vazios."
      />

      <PasswordField />

      <a href="#" className={styles.forgotPassword}>
        Esqueceu a senha?
      </a>

      <button type="submit" className={styles.loginButton}>
        Entrar
      </button>

      <p className={styles.registerLink}>
        Não possui conta ainda? <a href="#">Cadastre-se.</a>
      </p>
    </form>
  );
}
