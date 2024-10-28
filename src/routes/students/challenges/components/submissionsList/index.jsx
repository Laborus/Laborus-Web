import { MdOutlineSchool } from "react-icons/md";
import styles from "./style.module.css";

export default function SubmissionsList({ items }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.listTitle}>Submissões</h1>
      <ul className={styles.submissionsList}>
        {items.map((item) => (
          <li key={item.name} className={styles.submissionItem}>
            <div className={styles.userDetails}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.userAvatar}
              />
              <div className={styles.submissionInfo}>
                <h2 className={styles.submissionTitle}>{item.name}</h2>
                <div className={styles.institutionInfo}>
                  <MdOutlineSchool />
                  <span>{item.institution}</span>
                </div>
                {item.points && (
                  <div className={styles.submissionPoints}>
                    + {item.points} Pontos no Ranking
                  </div>
                )}
                <div
                  className={`${styles.submissionStatus} ${
                    item.accepted ? styles.accepted : styles.rejected
                  }`}
                >
                  {item.accepted ? "Aceito" : "Rejeitado"}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
