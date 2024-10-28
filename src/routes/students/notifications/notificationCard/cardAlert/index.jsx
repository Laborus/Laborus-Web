import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../style.module.css";

export function NotificationCardAlert({ name, message, time, image }) {
  return (
    <div className={styles.notificationCard}>
      <div className={styles.contentCard}>
      <div className={styles.profilePicContainer}>
        <img src={image} alt={name} className={styles.profilePic} />
      </div>
      <div className={styles.notificationContent}>
        <div className={styles.notificationText}>
          <strong>{name}</strong> {message}
        </div>
        <div className={styles.notificationTime}>{time}</div>
      </div>
      <FaTimes className={styles.dismissIcon} />
      </div>
    </div>
  );
}
