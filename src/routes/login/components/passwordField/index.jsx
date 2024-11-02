import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../inputField/InputField.module.css";

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputBox}>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Senha"
        required
      />
      <i onClick={togglePasswordVisibility} className={styles.togglePassword}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </i>
    </div>
  );
}
