import styles from "./ProfileNav.module.css";

export default function ProfileNav() {
  return (
    <nav className={styles.profileNav}>
      <ul>
        <li className={styles.active}>Sobre</li>
        <li>Publicações</li>
        <li>Comentários</li>
      </ul>
    </nav>
  );
}
