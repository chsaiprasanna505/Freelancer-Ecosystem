import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "./JobCard";
import "../styles/jobs.css";

function FeaturedJobs() {
  return (
    <section className="jobs-section">
      <div className="jobs-header">
        <div>
          <h2 className="jobs-title">
            Featured Jobs
          </h2>

          <p className="jobs-subtitle">
            Explore top freelance opportunities from trusted clients.
          </p>
        </div>

        <Link to="/jobs" className="view-btn">
          View All Jobs
        </Link>
      </div>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedJobs;