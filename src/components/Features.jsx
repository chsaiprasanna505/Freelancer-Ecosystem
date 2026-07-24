import React from "react";
import "../styles/features.css";

function Features() {
  return (
    <section className="freelancers">
      <h2>Featured Freelancers</h2>

      <p>
        Meet our top-rated freelancers ready to bring your ideas to life.
      </p>

      <div className="freelancer-grid">

        <div className="freelancer-card">
          <h3>John Doe</h3>
          <p className="role">Full Stack Developer</p>
          <div className="rating">⭐ 4.9</div>

          <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <button>View Profile</button>
        </div>

        <div className="freelancer-card">
          <h3>Sarah Smith</h3>
          <p className="role">UI/UX Designer</p>
          <div className="rating">⭐ 4.8</div>

          <div className="skills">
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>UI Design</span>
          </div>

          <button>View Profile</button>
        </div>

        <div className="freelancer-card">
          <h3>Mike Johnson</h3>
          <p className="role">Digital Marketer</p>
          <div className="rating">⭐ 4.9</div>

          <div className="skills">
            <span>SEO</span>
            <span>Google Ads</span>
            <span>Marketing</span>
          </div>

          <button>View Profile</button>
        </div>

      </div>
    </section>
  );
}

export default Features;