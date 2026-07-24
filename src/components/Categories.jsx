import "../styles/categories.css";
import {
  Code2,
  Palette,
  Smartphone,
  BrainCircuit,
  PenTool,
  TrendingUp,
} from "lucide-react";

const categories = [
  { icon: Code2, title: "Web Development", jobs: "1,200 Jobs" },
  { icon: Palette, title: "UI/UX Design", jobs: "860 Jobs" },
  { icon: Smartphone, title: "Mobile Apps", jobs: "540 Jobs" },
  { icon: BrainCircuit, title: "AI & ML", jobs: "320 Jobs" },
  { icon: PenTool, title: "Content Writing", jobs: "700 Jobs" },
  { icon: TrendingUp, title: "Digital Marketing", jobs: "410 Jobs" },
];

export default function Categories() {
  return (
    <section className="categories">
      <h2>Explore Categories</h2>
      <p>Find experts across the most in-demand skills.</p>

      <div className="categories-grid">
        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="category-card" key={index}>
              <div className="category-icon">
                <Icon size={32} />
              </div>

              <h3>{item.title}</h3>
              <span>{item.jobs}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}