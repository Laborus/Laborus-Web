// TermsAndPrivacy.jsx
import React from "react";
import styles from "./style.module.css";

export default function TermsAndPrivacy() {
  return (
    <div>
      <p className={`${styles.registerLink} ${styles.termsPrivacy}`}>
        Ao criar uma conta, você concorda com os <a href="#">Termos de Uso</a> e
        confirma que você leu a nossa <a href="#">Política de Privacidade</a>.
      </p>
      <p className={styles.registerLink}>
        Já possui uma conta? <a href="../">Faça Login</a>.
      </p>
    </div>
  );
}
