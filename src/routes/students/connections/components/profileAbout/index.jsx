import styles from "./ProfileAbout.module.css";

export default function ProfileAbout() {
  return (
    <div className={styles.profileAbout}>
      <div className={styles.tagContainer}>
        <span className={styles.tag}>Tecnologia</span>
        <span className={styles.tag}>História</span>
        <span className={styles.tag}>Robótica</span>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutSection}>
          <h2>Sobre</h2>
          <p>
            Arte é minha maior paixão, eu sou gamada em Fotografia e Design...
          </p>
        </div>
        <div className={styles.courseSection}>
          <h2>Curso</h2>
          <p>Análise e Desenvolvimento de Sistemas</p>
        </div>
      </div>
    </div>
  );
}
