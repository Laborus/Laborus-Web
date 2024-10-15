import React from "react";
import SearchBar from "../../../../../components/SearchBar";
import ChatList from "../chatList";
import styles from "./sidebar.module.css"; 

export default function ChatSidebar() {
  return (
    <aside className={styles.chatSidebar}>
      <header className={styles.chatSidebarHeader}>
        <h1 className={styles.chatTitle}>Conversas</h1>
        <SearchBar />
      </header>
      <ChatList />
    </aside>
  );
}
