// components/BackButton.js
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types"; // Opcional: Validação de prop-types
import styles from "./style.module.css";

export default function BackButton({ href }) {
  return (
    <a href={href} className={styles.backButton}>
      <div>
        <FaArrowLeft />
      </div>
      Voltar
    </a>
  );
}

// Validação de prop-types (opcional)
BackButton.propTypes = {
  href: PropTypes.string.isRequired,
};
