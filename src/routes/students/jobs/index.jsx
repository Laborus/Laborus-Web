import React, { useState } from "react";
import JobSidebar from "./sidebar";
import JobDetails from "./details";
import styles from "./style.module.css";

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState("students");

  return (
    <div className={styles.jobContainer}>
      <JobSidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <JobDetails />
    </div>
  );
}
