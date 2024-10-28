import React from "react";
import { NotificationCardConnection } from "../notificationCard/cardConnection";
import { NotificationCardAlert } from "../notificationCard/cardAlert";
import style from "./style.module.css";

export default function NotificationsList({ notifications }) {
  return (
    <div className={style.notificationList}>
      {notifications.map((notification, index) => (
        notification.type === "connection" ? (
          <NotificationCardConnection
            key={index}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            image={notification.image}
          />
        ) : (
          <NotificationCardAlert
            key={index}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            image={notification.image}
          />
        )
      ))}
    </div>
  );
}
