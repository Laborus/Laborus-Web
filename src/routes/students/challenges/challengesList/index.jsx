import { MdOutlineSchool } from "react-icons/md";
import styles from "./style.module.css";

export default function ChallengesList({ items }) {
  return (
    <ul className={styles.challengesList}>
      {items.map((item) => (
        <li key={item.name} className={styles.challengeListItem}>
          <div className={styles.wrapUserContent}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.userImage}
            />
            <div className={styles.challengeInfo}>
              <h2 className={styles.nameChallenge}>{item.name}</h2>
              <div className={styles.schoolInfo}>
                <MdOutlineSchool />
                <span>{item.institution}</span>
              </div>
              {item.points && (
                <div className={styles.points}>
                  + {item.points} Pontos no Ranking
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
