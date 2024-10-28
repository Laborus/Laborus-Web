import React, { useState } from "react";

import styles from "./style.module.css";
import JobSidebar from "./components/sidebar";
import JobDetails from "./components/details";

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState("students");

  return (
    <div className="wrapper">
      <JobSidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <JobDetails />
    </div>
  );
}
