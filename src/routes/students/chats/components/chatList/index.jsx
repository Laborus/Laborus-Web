import React from "react";
import styles from "./list.module.css"; 
import ChatItem from "../chatItem";

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "Juliane Bonfim",
      message: "Você: Formação: As 5 últimas mensagens desse usuário serão",
      time: "01:33",
      status: "online",
      active: true,
    },
    {
      id: 2,
      name: "Rogério Rocha",
      message: "Você: Formação: As 5 últimas mensagens desse usuário serão",
      time: "01:33",
      status: "",
      active: false,
    },
    {
      id: 3,
      name: "Juliane Bonfim",
      message: "Você: Formação: As 5 últimas mensagens desse usuário serão",
      time: "01:33",
      status: "",
      active: false,
    },
  ];

  return (
    <ul className={styles.chatList}>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </ul>
  );
}
