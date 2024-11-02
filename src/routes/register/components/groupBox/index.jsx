// components/GroupBox.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css"; // CSS pode conter o estilo específico do groupBox

export default function GroupBox({ children }) {
  return <div className={styles.groupBox}>{children}</div>;
}

GroupBox.propTypes = {
  children: PropTypes.node.isRequired,
};
