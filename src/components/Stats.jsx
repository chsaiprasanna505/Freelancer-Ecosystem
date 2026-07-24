import "../styles/stats.css";
import { Users, Briefcase, Star, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10K+",
    title: "Freelancers",
  },
  {
    icon: Briefcase,
    number: "25K+",
    title: "Projects Completed",
  },
  {
    icon: Star,
    number: "4.9★",
    title: "Average Rating",
  },
  {
    icon: Globe,
    number: "50+",
    title: "Countries",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <h2>Trusted by Thousands</h2>
      <p>Join our growing community of clients and freelancers.</p>

      <div className="stats-grid">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="stats-card" key={index}>
              <div className="stats-icon">
                <Icon size={34} />
              </div>

              <h3>{item.number}</h3>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}