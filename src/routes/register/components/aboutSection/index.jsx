// components/AboutSection.jsx
import React from "react";
import styles from "./style.module.css";

export default function AboutSection({ about, charCount, onAboutChange }) {
  return (
    <div className={styles.aboutSection}>
      <textarea
        value={about}
        onChange={onAboutChange}
        placeholder="Sobre"
        maxLength="200"
      />
      <div id={styles["charCount"]}>{charCount}/200</div>
    </div>
  );
}
