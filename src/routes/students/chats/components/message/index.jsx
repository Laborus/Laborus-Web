import React from "react";
import styles from "./message.module.css";

export default function Message({ message }) {
  return (
    <div className={`${styles.message} ${styles[message.type]}`}>
      <p className={message.type === 'received' ? styles.receivedText : styles.sentText}>
        {message.text}
      </p>
      <span className={styles.messageTime}>{message.time}</span>
    </div>
  );
}
