import React from "react";
import Message from "../message";
import styles from "./list.module.css";

export default function MessageList() {
  const messages = [
    { id: 1, text: "Mn, nós temos que revisar as sprints...", type: "received", time: "01:33" },
    { id: 2, text: "Secho ocasional...", type: "received", time: "01:33" },
    {
      id: 3,
      text: "As 5 últimas mensagens desse usuário...",
      type: "sent",
      time: "01:34",
    },
  ];

  return (
    <div className={styles.chatMessages}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
