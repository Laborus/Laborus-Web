// components/ImageUpload.jsx
import React from "react";
import styles from "./style.module.css";

export default function ImageUpload({ selectedImage, onImageChange }) {
  return (
    <div className={styles.imageUpload}>
      <label htmlFor="profileImage">
        <img
          id="profileImagePreview"
          src={selectedImage}
          alt="Imagem de perfil"
        />
      </label>
      <input
        type="file"
        id="profileImage"
        accept="image/*"
        onChange={onImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
