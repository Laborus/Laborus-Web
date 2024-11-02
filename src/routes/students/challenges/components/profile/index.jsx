import React from "react";
import { FaBriefcase } from "react-icons/fa";
import styles from "./profile.module.css";

export default function ProfileInfo() {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileUserInfoDetails}>
        <div className={styles.profilePicContainer}>
          <img
            className={styles.profilePic}
            src="/user-laborus.jpeg"
            alt="Profile Picture"
          />
        </div>
        <div className={styles.profileDetails}>
          <h1>Jovem Aprendiz (2024)</h1>
          <div className={styles.schoolInfo}>
            <FaBriefcase />
            <span>Santander</span>
          </div>
        </div>
      </div>
    </div>
  );
}
