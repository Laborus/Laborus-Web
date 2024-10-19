import React from "react";
import styles from "./InputField.module.css";

export default function InputField({ type, name, placeholder, errorMessage }) {
  return (
    <div className={styles.inputBox}>
      <input type={type} name={name} placeholder={placeholder} required />
      <span className={styles.error}>{errorMessage}</span>
    </div>
  );
}
