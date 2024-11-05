// components/SubmitButton.js
import React from "react";
import styles from "./style.module.css";

export default function SubmitButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      className={styles.submitButton}
      onClick={onClick}
      disabled={disabled}
    >
      Continuar
    </button>
  );
}
