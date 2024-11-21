import React, { useState } from "react";
import styles from "./style.module.css";

// Função para aplicar a máscara de CPF
const applyCpfMask = (value) => {
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (value.length <= 3) return value;
  if (value.length <= 6) return value.replace(/(\d{3})(\d{1,})/, "$1.$2");
  if (value.length <= 9)
    return value.replace(/(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3");
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3-$4");
};

// Função para aplicar a máscara de CNPJ
const applyCnpjMask = (value) => {
  value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (value.length <= 2) return value;
  if (value.length <= 5) return value.replace(/(\d{2})(\d{1,})/, "$1.$2");
  if (value.length <= 8)
    return value.replace(/(\d{2})(\d{3})(\d{1,})/, "$1.$2.$3");
  if (value.length <= 12)
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1,})/, "$1.$2.$3/$4");
  return value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,})/,
    "$1.$2.$3/$4-$5"
  );
};

// Função para validar CPF
const validateCpf = (value) => {
  const cpf = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (cpf.length !== 11) return "CPF inválido.";
  if (/^(\d)\1{10}$/.test(cpf)) return "CPF inválido."; // Verifica se todos os números são iguais

  let sum = 0;
  let remainder;

  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return "CPF inválido.";

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return "CPF inválido.";

  return "";
};

// Função para validar CNPJ
const validateCnpj = (value) => {
  const cnpj = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (cnpj.length !== 14) return "CNPJ inválido.";
  if (/^(\d)\1+$/.test(cnpj)) return "CNPJ inválido."; // Verifica se todos os números são iguais

  let sum = 0;
  const firstWeight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 12; i++) sum += parseInt(cnpj.charAt(i)) * firstWeight[i];
  let remainder = sum % 11;
  const firstVerifier = remainder < 2 ? 0 : 11 - remainder;
  if (firstVerifier !== parseInt(cnpj.charAt(12))) return "CNPJ inválido.";

  sum = 0;
  const secondWeight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 13; i++)
    sum += parseInt(cnpj.charAt(i)) * secondWeight[i];
  remainder = sum % 11;
  const secondVerifier = remainder < 2 ? 0 : 11 - remainder;
  if (secondVerifier !== parseInt(cnpj.charAt(13))) return "CNPJ inválido.";

  return ""; // CNPJ válido
};

export default function InputField({
  type,
  name,
  placeholder,
  errorMessage,
  onValidityChange, // Prop para comunicar validade
}) {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const validateField = (value) => {
    let validationError = "";

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) validationError = "O campo de e-mail não pode estar vazio.";
      else if (!emailRegex.test(value))
        validationError = "Por favor, insira um e-mail válido.";
    }

    if (type === "text" && name === "cpf") {
      if (!value) validationError = "O campo de CPF não pode estar vazio.";
      else validationError = validateCpf(value); // CPF validation
    }

    if (type === "text" && name === "cnpj") {
      if (!value) validationError = "O campo de CNPJ não pode estar vazio.";
      else validationError = validateCnpj(value); // CNPJ validation
    }

    if (type === "text" && name === "name") {
      if (!value) validationError = "O nome não pode estar vazio.";
      else if (value.length > 50)
        validationError = "O nome deve ter no máximo 50 caracteres.";
    }

    onValidityChange(name, !validationError); // Comunica a validade do campo
    return validationError;
  };

  const handleBlur = () => {
    const validationError = validateField(value);
    setError(validationError);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (name === "cpf") {
      inputValue = applyCpfMask(inputValue); // Aplica a máscara de CPF
    }

    if (name === "cnpj") {
      inputValue = applyCnpjMask(inputValue); // Aplica a máscara de CNPJ
    }

    setValue(inputValue);
    if (error) {
      setError(""); // Limpa o erro enquanto o usuário digita
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
