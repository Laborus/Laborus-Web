import ChatSidebar from "./components/sidebar";
import ChatContent from "./components/chatContent";
import styles from "./style.module.css";

export default function ChatPages() {
  return (
    <div className={styles.chatContainer}>
      <ChatSidebar />
      <ChatContent />
    </div>
  );
}
