// components/Container.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css"; // Crie um CSS específico se necessário

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
