import "../styles/register.css";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-page">
      <motion.div
        className="register-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="register-header">
          <h1>Create Account 🚀</h1>
          <p>Join SkillSphere and start your journey</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <User size={18} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Mail size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {showPassword ? (
              <EyeOff
                size={18}
                className="password-toggle"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                size={18}
                className="password-toggle"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {showConfirm ? (
              <EyeOff
                size={18}
                className="password-toggle"
                onClick={() => setShowConfirm(false)}
              />
            ) : (
              <Eye
                size={18}
                className="password-toggle"
                onClick={() => setShowConfirm(true)}
              />
            )}
          </div>

          <select
            className="role-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Your Role</option>
            <option value="student">Student</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>

          <button type="submit" className="register-btn">
            Create Account
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;