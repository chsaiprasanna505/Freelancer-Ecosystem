import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import StatCard from "../components/StatCard";
import RecentProjects from "../components/RecentProjects";
import "../styles/dashboard.css";

function FreelancerDashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <DashboardNavbar />

        {/* Welcome */}

        <div className="dashboard-header">

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Track your freelance performance and discover new opportunities.
          </p>

        </div>

        {/* Statistics */}

        <div className="stats-grid">

          <StatCard
            title="Total Earnings"
            value="₹45,600"
            color="#22c55e"
          />

          <StatCard
            title="Projects"
            value="12"
            color="#3b82f6"
          />

          <StatCard
            title="Proposals"
            value="8"
            color="#f59e0b"
          />

          <StatCard
            title="Rating"
            value="4.9 ⭐"
            color="#ec4899"
          />

        </div>

        {/* Dashboard Grid */}

        <div className="dashboard-grid">

          <div>

            <div className="dashboard-box">

              <h2>💰 Monthly Earnings</h2>

              <div className="big-number">
                ₹45K
              </div>

              <p>
                Earnings this month increased by 18%.
              </p>

            </div>

            <div className="dashboard-box">

              <h2>📈 Profile Completion</h2>

              <div className="skill">
                <span>Profile</span>
                <progress value="90" max="100"></progress>
              </div>

              <div className="skill">
                <span>Portfolio</span>
                <progress value="80" max="100"></progress>
              </div>

              <div className="skill">
                <span>Skills</span>
                <progress value="95" max="100"></progress>
              </div>

              <div className="skill">
                <span>Verification</span>
                <progress value="100" max="100"></progress>
              </div>

            </div>

          </div>

          <div>

            <div className="dashboard-box">

              <h2>🚀 Recent Projects</h2>

              <RecentProjects />

            </div>

            <div className="dashboard-box">

              <h2>🎯 Upcoming Goals</h2>

              <ul className="dashboard-list">

                <li>Complete MERN Portfolio</li>

                <li>Win 5 New Projects</li>

                <li>Reach ₹60,000 Earnings</li>

                <li>Maintain 5★ Rating</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Activity */}

        <div className="dashboard-box activity-box">

          <h2>📋 Recent Activity</h2>

          <div className="activity-item">
            ✅ Proposal submitted successfully
          </div>

          <div className="activity-item">
            💼 New client viewed your profile
          </div>

          <div className="activity-item">
            ⭐ Received a 5-star review
          </div>

          <div className="activity-item">
            💰 Payment of ₹12,000 received
          </div>

        </div>

      </div>

    </div>
  );
}

export default FreelancerDashboard;