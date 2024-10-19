import React, { useState } from "react";
import styles from "./Login.module.css";

import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones Font Awesome

export default function Login() {
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Simula o carregamento
    setTimeout(() => setLoading(false), 2000); // Exemplo de espera simulada
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <img src="/laborus-logotipo-42x42.png" alt="Logotipo Laborus" />
        </div>
        <h1 className={styles.title}>Bem-vindo(a) de volta!</h1>
        <p className={styles.titleDetails}>
          É bom vê-lo(a) novamente! Digite suas informações.
        </p>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className={`${styles.inputBox} ${styles.emailBox}`}>
            <input type="email" name="email" placeholder="E-mail" required />
            <span className={`${styles.error} ${styles.emailError}`}>
              Os campos não podem estar vazios.
            </span>
          </div>
          <div className={styles.inputBox}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Senha"
              required
            />
            <i
              onClick={togglePasswordVisibility}
              className={styles.togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </i>
          </div>
          <a href="#" className={styles.forgotPassword}>
            Esqueceu a senha?
          </a>
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
        <p className={styles.registerLink}>
          Não possui conta ainda? <a href="#">Cadastre-se.</a>
        </p>
      </div>
      <div className={styles.sideBanner}></div>
    </div>
  );
}
