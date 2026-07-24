import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, role }) {

  const { user, loading } = useAuth();


  if (loading) {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        Loading...
      </div>
    );
  }


  // User not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }


  // Check user role
  if (role && user.role?.toLowerCase() !== role.toLowerCase()) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }


  return children;
}


export default ProtectedRoute;