import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  Briefcase,
  Bell,
  User,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDashboard = () => {
    if (user?.role === "student") {
      navigate("/student-dashboard");
    } else if (user?.role === "freelancer") {
      navigate("/freelancer-dashboard");
    } else if (user?.role === "client") {
      navigate("/client-dashboard");
    }

    closeMenu();
  };

  const handlePostJob = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role === "client") {
      navigate("/post-job");
    } else {
      alert("Only clients can post jobs.");
    }

    closeMenu();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    closeMenu();
  };

  return (
    <header className="navbar">

      {/* Logo */}

      <Link to="/" className="navbar-logo">
        <div className="logo-icon">
          S
        </div>

        <span>SkillSphere</span>
      </Link>


      {/* Navigation */}

      <nav
        className={`navbar-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <NavLink
          to="/"
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/jobs"
          onClick={closeMenu}
        >
          Jobs
        </NavLink>

        <a
          href="#categories"
          onClick={closeMenu}
        >
          Categories
        </a>

        <a
          href="#how-it-works"
          onClick={closeMenu}
        >
          How It Works
        </a>

      </nav>


      {/* Search */}

      <div className="navbar-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search jobs, skills..."
        />

      </div>


      {/* Right Side */}

      <div className="navbar-actions">

        {/* Notification */}

        {user && (
          <button className="icon-btn">
            <Bell size={20} />
          </button>
        )}


        {/* Post Job */}

        <button
          className="post-btn"
          onClick={handlePostJob}
        >
          <Briefcase size={18} />
          Post Job
        </button>


        {/* Login / Register */}

        {!user ? (
          <>
            <button
              className="login-btn"
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            >
              Login
            </button>

            <button
              className="register-btn"
              onClick={() => {
                navigate("/register");
                closeMenu();
              }}
            >
              Register
            </button>
          </>
        ) : (
          <>
            {/* Dashboard */}

            <button
              className="dashboard-btn"
              onClick={handleDashboard}
            >
              <User size={18} />
              Dashboard
            </button>


            {/* Logout */}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}


        {/* Mobile Menu */}

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;