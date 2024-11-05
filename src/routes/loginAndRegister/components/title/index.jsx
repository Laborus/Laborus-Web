// components/Title.js
import React from "react";
import styles from "./style.module.css";

export default function Title({ title, details }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.titleDetails}>{details}</p>
    </>
  );
}
