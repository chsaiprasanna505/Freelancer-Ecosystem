import "../styles/login.css";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);
      console.log("Logged in user:", res.data.user);

      login(res.data.user, res.data.token);

      alert("Login Successful!");

      // Redirect based on role
    if (res.data.user.role === "student") {
  navigate("/student-dashboard");
} else if (res.data.user.role === "freelancer") {
  navigate("/freelancer-dashboard");
} else if (res.data.user.role === "client") {
  navigate("/client-dashboard");
} else {
  navigate("/");
}
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="login-header">
          <h1>Welcome Back 👋</h1>
          <p>Sign in to your SkillSphere account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;