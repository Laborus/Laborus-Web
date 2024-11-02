import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import MessageList from "../messageList";
import ChatFooter from "../chatFooter";
import styles from "./content.module.css"; 

export default function ChatContent() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <main className={styles.chatContent}>
      <header className={styles.chatHeader}>
        <div className={styles.userInfo}>
          <img
            className={styles.userPicture}
            src="/user-laborus.jpeg"
            alt="Profile"
          />
          <div className={styles.userInfoText}>
            <h3 className={styles.username}>Juliane Bonfim</h3>
            <p className={styles.userStatus}>Digitando...</p>
          </div>
        </div>
        <div className={styles.chatOptions} onClick={toggleOptions}>
          <FaEllipsisH />
        </div>
        {showOptions && (
          <div className={styles.chatOptionsMenu}>
            <div className="menu-item">Denunciar</div>
            <div className="menu-item">Excluir conversa</div>
          </div>
        )}
      </header>

      <MessageList />

      <ChatFooter />
    </main>
  );
}
