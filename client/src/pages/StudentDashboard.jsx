import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/StatCard";
import "../styles/dashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <DashboardNavbar />

        <WelcomeCard />

        {/* Statistics */}

        <div className="stats-grid">

          <StatCard
            title="Courses Enrolled"
            value="12"
            color="#3b82f6"
          />

          <StatCard
            title="Completed"
            value="8"
            color="#10b981"
          />

          <StatCard
            title="Certificates"
            value="5"
            color="#8b5cf6"
          />

          <StatCard
            title="Applied Jobs"
            value="14"
            color="#f59e0b"
          />

        </div>

        {/* Main Dashboard */}

        <div className="dashboard-grid">

          {/* LEFT */}

          <div>

            <div className="dashboard-box">

              <h2>🔥 Learning Streak</h2>

              <div className="big-number">
                18
              </div>

              <p>
                Days of continuous learning.
              </p>

            </div>

            <div className="dashboard-box">

              <h2>📈 Skill Progress</h2>

              <div className="skill">

                <span>HTML & CSS</span>

                <progress value="95" max="100"></progress>

              </div>

              <div className="skill">

                <span>JavaScript</span>

                <progress value="80" max="100"></progress>

              </div>

              <div className="skill">

                <span>React</span>

                <progress value="72" max="100"></progress>

              </div>

              <div className="skill">

                <span>Node.js</span>

                <progress value="60" max="100"></progress>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="dashboard-box">

              <h2>🎯 Recommended Jobs</h2>

              <ul className="dashboard-list">

                <li>Frontend React Developer</li>

                <li>MERN Stack Intern</li>

                <li>UI / UX Designer</li>

                <li>Backend Node.js Developer</li>

              </ul>

            </div>

            <div className="dashboard-box">

              <h2>🏆 Achievements</h2>

              <ul className="dashboard-list">

                <li>🏅 React Basics Completed</li>

                <li>🏅 AWS Cloud Badge</li>

                <li>🏅 Java Programming</li>

                <li>🏅 Top 10% Learner</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="dashboard-box activity-box">

          <h2>📋 Recent Activity</h2>

          <div className="activity-item">
            ✅ Applied for Frontend Developer
          </div>

          <div className="activity-item">
            🎉 React Certificate Earned
          </div>

          <div className="activity-item">
            📚 Completed JavaScript Course
          </div>

          <div className="activity-item">
            💼 Profile Updated Successfully
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;