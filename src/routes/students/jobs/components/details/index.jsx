import React from "react";
import { FaClock, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import ProfileInfo from "../profile";
import TagContainer from "../tags";
import AboutSection from "../about";
import styles from "./details.module.css";

export default function JobDetails() {
  return (
    <main className={styles.profileContent}>
      <div className={styles.coverPhoto}>
        <img src="src/assets/images/post-example-2.jpeg" alt="Cover Photo" />
      </div>
      <ProfileInfo />
      <div className={styles.jobsDetails}>
        <div className={`${styles.jobs} ${styles.jobsPosted}`}>
          <FaClock />
          <span>Vaga publicada 6 horas atrás</span>
        </div>
        <div className={`${styles.jobs} ${styles.jobsPeriod}`}>
          <FaClock />
          <span>
            <strong>Período:</strong> Manhã
          </span>
        </div>
        <div className={`${styles.jobs} ${styles.jobsType}`}>
          <FaBuilding />
          <span>
            <strong>Modalidade:</strong> Presencial
          </span>
        </div>
        <div className={`${styles.jobs} ${styles.jobsLocation}`}>
          <FaMapMarkerAlt />
          <span>
            <strong>Localização:</strong> Osasco | São Paulo
          </span>
        </div>
      </div>
      <section className={styles.profileMainContent}>
        <TagContainer />
        <AboutSection />
      </section>
    </main>
  );
}
