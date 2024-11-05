import { MdOutlineSchool } from "react-icons/md";
import styles from "./style.module.css";
import { IoIosAdd } from "react-icons/io";

export default function ChallengesListSchool({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.inline}>
        <h1 className={styles.listTitle}>Seus Desafios</h1>
        <button className={styles.addChallenges}>
          <IoIosAdd />
        </button>
      </div>
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
                <div className={styles.difficulty}>
                  <span>Dificuldade: </span>
                  <span>
                    <strong>{item.difficulty}</strong>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
