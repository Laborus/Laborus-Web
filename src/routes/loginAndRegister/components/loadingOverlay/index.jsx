// components/LoadingOverlay.js
import React from "react";
import styles from "./style.module.css";

export default function LoadingOverlay() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
}
