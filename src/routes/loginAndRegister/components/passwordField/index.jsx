import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../inputField/style.module.css";

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return "A senha deve ter no mínimo 8 caracteres.";
    }
    if (!/[A-Z]/.test(value)) {
      return "A senha deve conter pelo menos uma letra maiúscula.";
    }
    if (!/[a-z]/.test(value)) {
      return "A senha deve conter pelo menos uma letra minúscula.";
    }
    if (!/[0-9]/.test(value)) {
      return "A senha deve conter pelo menos um número.";
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return "A senha deve conter pelo menos um caractere especial (!@#$%^&*).";
    }
    return "";
  };

  const handleBlur = () => {
    const validationError = validatePassword(password);
    setError(validationError);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (error) {
      // Limpa o erro enquanto o usuário digita, para feedback imediato
      setError("");
    }
  };

  return (
    <div className={`${styles.inputBox} ${error ? styles.errorActive : ""}`}>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Senha"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <i onClick={togglePasswordVisibility} className={styles.togglePassword}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </i>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
