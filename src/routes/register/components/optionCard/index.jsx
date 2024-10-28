// components/OptionCard.jsx
import React from "react";
import styles from "./style.module.css";

export default function OptionCard({ image, label, selected, onClick }) {
  return (
    <div
      className={`${styles.option} ${selected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={label} />
      <p>{label}</p>
    </div>
  );
}
