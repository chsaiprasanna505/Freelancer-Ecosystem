import {
  Search,
  UserPlus,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import "../styles/howItWorks.css";

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={34} />,
      title: "Create Your Account",
      description:
        "Sign up and create your professional profile to get started.",
    },
    {
      icon: <Search size={34} />,
      title: "Find the Right Job",
      description:
        "Browse jobs and discover opportunities that match your skills.",
    },
    {
      icon: <Briefcase size={34} />,
      title: "Apply for Projects",
      description:
        "Submit your proposal and connect with top companies.",
    },
    {
      icon: <CheckCircle size={34} />,
      title: "Get Hired",
      description:
        "Start working, earn money, and grow your career.",
    },
  ];

  return (
    <section className="how-it-works">

      <div className="section-header">
        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2>
          Start Your Journey with <span>SkillSphere</span>
        </h2>

        <p>
          Whether you are looking for freelance projects or your dream job,
          SkillSphere makes everything simple.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;