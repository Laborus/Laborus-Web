import React, { useState } from "react";
import styles from "./style.module.css";
import SearchBar from "../../../components/SearchBar";
import FilterButtonsNotifications from "./filterButton";
import NotificationsList from "./notificationsList";

const notifications = [
  {
    type: "connection",
    name: "Maria Clara Júnior",
    message: "enviou uma solicitação de conexão",
    time: "46 segundos atrás",
    image: "/fatec-image.png",
  },
  {
    type: "alert",
    name: "Fatec Carapicuíba",
    message: "acionou um alerta",
    time: "4 minutos atrás",
    image: "/fatec-image.png",
  },
];


export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className={styles.wrapper}>
     <header className="chat-sidebar-header">
          <h1 className="chat-title">Notificações</h1>
          <SearchBar />
          <FilterButtonsNotifications activeFilter={activeFilter} onFilterClick={setActiveFilter} />
    </header>
    <NotificationsList  notifications={notifications}/>
    </div>
  );
}
