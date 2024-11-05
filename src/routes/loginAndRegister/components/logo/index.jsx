// components/Logo.js
import React from "react";
import laborusLogo from "/laborus-logotipo-42x42.png";
import styles from "./style.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={laborusLogo} alt="Logotipo Laborus" />
    </div>
  );
}
