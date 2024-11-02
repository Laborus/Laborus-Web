// components/CoverPhoto.jsx
import React from "react";

import styles from "./CoverPhoto.module.css";

function CoverPhoto() {
  return (
    <div className={styles.coverPhoto}>
      <img src="/post-example-2.jpeg" alt="Cover" />
    </div>
  );
}

export default CoverPhoto;
