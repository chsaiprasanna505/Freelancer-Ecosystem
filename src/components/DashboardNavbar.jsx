import "../styles/dashboardNavbar.css";
import { Search, Bell, MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <div className="dashboard-navbar">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search projects..."
        />

      </div>



      <div className="navbar-right">


        <div className="nav-icon">
          <Bell size={20} />
        </div>


        <div className="nav-icon">
          <MessageCircle size={20} />
        </div>



        <div className="profile">

          <div className="profile-avatar">
            {
              user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"
            }
          </div>


          <div className="profile-info">

            <h4>
              {user?.name || "Guest"}
            </h4>


            <p>
              {user?.role || "Student"}
            </p>

          </div>



          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>


        </div>


      </div>


    </div>
  );
}

export default DashboardNavbar;