import JobList from "./list";
import styles from "./style.module.css";

export default function JobsPageCompany() {
  return (
    <section className={styles.wrapper}>
        <JobList/>
    </section>
  );
}