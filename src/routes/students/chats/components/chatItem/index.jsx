import React from "react";
import styles from "./item.module.css";

export default function ChatItem({ chat }) {
  return (
    <li
      className={`${styles.chatListItem} ${chat.active ? styles.active : ""}`}
    >
      <div className={styles.wrapperInfoImage}>
        <img src="/user-laborus.jpeg" alt="Profile Image" className={styles.img}/>
        <div className={`${styles.statusIndicator} ${chat.status}`}></div>
      </div>
      <div className={styles.chatInfo}>
        <h2 className={styles.nameChat}>{chat.name}</h2>
        <p
          className={`${styles.lastMessage} ${
            chat.active ? styles.active : ""
          }`}
        >
          {chat.message}
        </p>
      </div>
      <span
        className={`${styles.chatTime} ${chat.active ? styles.active : ""}`}
      >
        {chat.time}
      </span>
    </li>
  );
}
