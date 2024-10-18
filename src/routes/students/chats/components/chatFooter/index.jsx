import React from "react";
import { FaImage, FaVideo, FaPaperPlane } from "react-icons/fa";
import styles from "./footer.module.css"; 

export default function ChatFooter() {
  return (
    <footer className={styles.chatFooter}>
      <button id="select-image" className={styles.selectImage}>
        <FaImage />
      </button>
      <button id="select-video" className={styles.selectVideo}>
        <FaVideo />
      </button>
      <input type="text" placeholder="Mensagem" className={styles.chatInput} />
      <button className={styles.sendButton} disabled>
        <FaPaperPlane />
      </button>
    </footer>
  );
}
