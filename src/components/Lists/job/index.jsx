import React from "react";
import "./style.css";

export default function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma vaga encontrada.</p>
      )}
    </div>
  );
}
