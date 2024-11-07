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

// Função para validar CPF
const validateCpf = (value) => {
  const cpf = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (cpf.length !== 11) return "CPF inválido.";

  // Lógica de validação simples para CPF (não é 100% confiável, mas é suficiente para a maioria dos casos)
  let sum = 0;
  let remainder;

  // Verifica se todos os números são iguais (como 111.111.111-11, 222.222.222-22, etc.)
  if (/^(\d)\1{10}$/.test(cpf)) return "CPF inválido.";

  // Validação do primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return "CPF inválido.";

  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10))) return "CPF inválido.";

  return "";
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

// Função para validar CNPJ
const validateCnpj = (value) => {
  const cnpj = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (cnpj.length !== 14) return "CNPJ inválido.";

  // Lógica de validação do CNPJ
  let sum = 0;
  let remainder;

  // Validação dos primeiros 12 dígitos
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * (5 - (i % 8));
  }
  remainder = sum % 11;
  if (remainder < 2) remainder = 0;
  else remainder = 11 - remainder;
  if (remainder !== parseInt(cnpj.charAt(12))) return "CNPJ inválido.";

  // Validação dos últimos 2 dígitos
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * (6 - (i % 8));
  }
  remainder = sum % 11;
  if (remainder < 2) remainder = 0;
  else remainder = 11 - remainder;
  if (remainder !== parseInt(cnpj.charAt(13))) return "CNPJ inválido.";

  return "";
};

export default function InputField({
  type,
  name,
  placeholder,
  validate, // Função de validação personalizada
  errorMessage, // Mensagem de erro personalizada
}) {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const defaultValidate = (value) => {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) return "O campo de e-mail não pode estar vazio.";
      if (!emailRegex.test(value)) return "Por favor, insira um e-mail válido.";
    }

    if (type === "text" && name === "cpf") {
      if (!value) return "O campo de CPF não pode estar vazio.";
      const cpfError = validateCpf(value); // Verifica se o CPF é válido
      if (cpfError) return cpfError;
    }

    if (type === "text" && name === "cnpj") {
      if (!value) return "O campo de CNPJ não pode estar vazio.";
      const cnpjError = validateCnpj(value); // Verifica se o CNPJ é válido
      if (cnpjError) return cnpjError;
    }

    if (type === "text" && name === "name") {
      if (!value) return "O nome não pode estar vazio.";
      if (value.length > 50) return "O nome deve ter no máximo 50 caracteres.";
    }

    return "";
  };

  const handleBlur = () => {
    const validationError = validate ? validate(value) : defaultValidate(value);
    setError(validationError);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (name === "cpf") {
      inputValue = applyCpfMask(inputValue); // Aplica a máscara no CPF
    }

    if (name === "cnpj") {
      inputValue = applyCnpjMask(inputValue); // Aplica a máscara no CNPJ
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
