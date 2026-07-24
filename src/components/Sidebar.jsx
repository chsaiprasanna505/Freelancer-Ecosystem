import {
  Home,
  Briefcase,
  User,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  FileText,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "student"
      ? "/student-dashboard"
      : user?.role === "freelancer"
      ? "/freelancer-dashboard"
      : user?.role === "client"
      ? "/client-dashboard"
      : "/";

  return (
    <aside className="sidebar">
      <div>
        <h2 className="logo">SkillSphere</h2>

        <div className="profile-box">
          <div className="avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <div>
            <h3>{user?.name || "Guest"}</h3>
            <p>{user?.role || "Student"}</p>
          </div>
        </div>

        <nav>
          {/* Dashboard */}
          <Link to={dashboardPath} className="menu-item">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          {/* Student Menu */}
          {user?.role === "student" && (
            <>
              <Link to="/jobs" className="menu-item">
                <Briefcase size={20} />
                <span>Available Jobs</span>
              </Link>

              <Link to="/profile" className="menu-item">
                <User size={20} />
                <span>Profile</span>
              </Link>
            </>
          )}

          {/* Freelancer Menu */}
          {user?.role === "freelancer" && (
            <>
              <Link to="/jobs" className="menu-item">
                <Briefcase size={20} />
                <span>Available Jobs</span>
              </Link>

              <Link to="/my-applications" className="menu-item">
                <FileText size={20} />
                <span>My Applications</span>
              </Link>

              <Link to="/profile" className="menu-item">
                <User size={20} />
                <span>Profile</span>
              </Link>
            </>
          )}

          {/* Client Menu */}
          {user?.role === "client" && (
            <>
              <Link to="/post-job" className="menu-item">
                <Briefcase size={20} />
                <span>Post Job</span>
              </Link>

              <Link to="/jobs" className="menu-item">
                <Briefcase size={20} />
                <span>Available Jobs</span>
              </Link>

              <Link to="/applications" className="menu-item">
                <FileText size={20} />
                <span>Applications</span>
              </Link>

              <Link to="/client-projects" className="menu-item">
                <MessageSquare size={20} />
                <span>Projects</span>
              </Link>

              <Link to="/profile" className="menu-item">
                <User size={20} />
                <span>Profile</span>
              </Link>
            </>
          )}

          {/* Settings */}
          <Link to="/settings" className="menu-item">
            <Settings size={20} />
            <span>Settings</span>
          </Link>

          {/* Notifications */}
          <Link to="/notifications" className="menu-item">
            <Bell size={20} />
            <span>Notifications</span>
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <button className="logout" onClick={handleLogout}>
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;