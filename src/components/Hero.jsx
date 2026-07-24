import "../styles/hero.css";
import { motion } from "framer-motion";
import { Search, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigate(`/jobs?search=${search}`);
  };

  return (
    <section className="hero">

      {/* Background Effects */}
      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      {/* LEFT SIDE */}
      <div className="hero-left">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            <Sparkles size={16} />
            AI Powered Freelance Marketplace
          </span>

          <h1>
            Hire the <span>Best Talent</span>
            <br />
            Build Amazing Products.
          </h1>

          <p className="hero-description">
            Connect with verified freelancers, hire faster,
            manage projects effortlessly, and grow your business
            with SkillSphere.
          </p>

          {/* Search */}

          <div className="search-box">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search jobs, skills or companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

          {/* Buttons */}

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/jobs")}
            >
              Explore Jobs
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/register")}
            >
              Hire Talent
            </button>

          </div>

          {/* Trust */}

          <div className="hero-trust">

            <div>
              <ShieldCheck size={18} />
              <span>Verified Freelancers</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Secure Payments</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>AI Smart Matching</span>
            </div>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div className="stat-card">
              <h3>12K+</h3>
              <p>Freelancers</p>
            </div>

            <div className="stat-card">
              <h3>3500+</h3>
              <p>Companies</p>
            </div>

            <div className="stat-card">
              <h3>20K+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <img src={heroImage} alt="Hero" />

        {/* Floating Cards */}

        <div className="floating-card top-card">
          🚀 120+ Jobs Posted Today
        </div>

        <div className="floating-card bottom-card">
          ⭐ 98% Client Satisfaction
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;