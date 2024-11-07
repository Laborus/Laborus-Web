import React, { useState } from "react";
import styles from "./style.module.css";

export default function InputField({
  type,
  name,
  placeholder,
  validate, // Função de validação personalizada
  errorMessage,
}) {
  const [error, setError] = useState(""); // Estado para armazenar mensagem de erro
  const [value, setValue] = useState(""); // Estado para armazenar valor do campo

  const handleBlur = () => {
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (error) {
      // Limpa o erro se o valor for alterado
      setError("");
    }
  };

  return (
    <div className={`${styles.inputBox} ${error ? styles.errorActive : ""}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
