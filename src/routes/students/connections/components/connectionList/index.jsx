import { FaGraduationCap, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import styles from "./ConnectionList.module.css";

export default function ConnectionList({ type, items, active }) {
  if (!active) return null;

  return (
    <ul className={`${styles.connectionsList} ${styles[type]}`}>
      {items.map((item) => (
        <li key={item.name} className={styles.connectionListItem}>
          <div className={styles.wrapUserContent}>
            <img src={item.image} alt={item.name} />
            <div className={styles.connectionInfo}>
              <h2 className={styles.nameConnection}>{item.name}</h2>
              {item.details.map((detail, index) => (
                <div key={index} className={styles.schoolInfo}>
                  {detail.icon} <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.connectionsButtons}>
            <button id={styles.confirmBtn}>{item.buttonLabel}</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
