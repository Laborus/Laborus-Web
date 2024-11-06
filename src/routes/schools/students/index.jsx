import StudentList from "./list";
import styles from "./style.module.css";

export default function StudentsPageSchool() {
  return (
    <section className={styles.wrapper}>
        <StudentList/>
    </section>
  );
}