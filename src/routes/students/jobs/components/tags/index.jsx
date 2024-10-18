import React from "react";
import styles from "./tags.module.css";

export default function TagContainer() {
  return (
    <div className={styles.tagContainer}>
      <span className={styles.tag}>Tecnologia</span>
      <span className={styles.tag}>Inovação</span>
      <span className={styles.tag}>Financeiro</span>
    </div>
  );
}
