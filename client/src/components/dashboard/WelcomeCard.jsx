import "./WelcomeCard.css";
import { useAuth } from "../../context/AuthContext";

function WelcomeCard() {
  const { user } = useAuth();

  return (
    <div className="welcome-card">
      <div className="welcome-left">
        <h1>
          Welcome Back,
          <span> {user?.name || "Student"} 👋</span>
        </h1>

        <p>
          Continue your learning journey and unlock new career
          opportunities with SkillSphere.
        </p>

        <button>Continue Learning</button>
      </div>

      <div className="welcome-right">
        <div className="streak-card">
          <h2>🔥 18 Day Streak</h2>
          <p>You're doing amazing. Keep learning!</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;