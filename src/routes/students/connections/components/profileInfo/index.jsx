import { FaGraduationCap } from "react-icons/fa";
import styles from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileUserInfoDetails}>
        <div className={styles.profilePicContainer}>
          <img
            className={styles.profilePic}
            src="src/assets/images/user-laborus.jpeg"
            alt="Profile"
          />
        </div>
        <div className={styles.profileDetails}>
          <h1>Juliane Bonfim</h1>
          <div className={styles.schoolInfo}>
            <FaGraduationCap />
            <span>Fatec Carapicuíba</span>
          </div>
        </div>
      </div>
      <div className={styles.profileActions}>
        <button className={styles.addFriendBtn}>Adicionar</button>
      </div>
    </div>
  );
}
