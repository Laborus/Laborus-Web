// components/InputSelect.jsx
import React from "react";
import styles from "./style.module.css";

export default function InputSelect({
  label = "Selecione uma opção", // Valor padrão para o label
  options = [], // Lista genérica de opções
  selectedValue,
  onSelectChange,
  ariaLabel = "Select", // Acessibilidade dinâmica
}) {
  return (
    <div className={styles.boxSelect}>
      <select
        className={styles.inputSelect}
        value={selectedValue}
        onChange={(e) => onSelectChange(e.target.value)}
        aria-label={ariaLabel}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
