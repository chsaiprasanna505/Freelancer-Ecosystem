import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FreelancerDashboard from "../pages/FreelancerDashboard";
import ClientDashboard from "../pages/ClientDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import JobDetails from "../pages/JobDetails";
import ApplyJob from "../pages/ApplyJob";
import MyApplications from "../pages/MyApplications";
import Proposals from "../pages/Proposals";
import StudentDashboard from "../pages/StudentDashboard";
import Jobs from "../pages/Jobs";
import PostJob from "../pages/PostJob";
import Applications from "../pages/Applications";
import ClientProjects from "../pages/ClientProjects";


import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Dashboards */}
        <Route
          path="/freelancer-dashboard"
          element={
            <ProtectedRoute>
              <FreelancerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Pages */}
        <Route
          path="/job-details/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-job/:id"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/proposals"
          element={
            <ProtectedRoute>
              <Proposals />
            </ProtectedRoute>
          }
        />
        <Route
  path="/student-dashboard"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/jobs"
  element={
    <ProtectedRoute>
      <Jobs />
    </ProtectedRoute>
  }
/>
<Route
  path="/post-job"
  element={
    <ProtectedRoute>
      <PostJob />
    </ProtectedRoute>
  }
/>
<Route
  path="/applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>

<Route
  path="/client-projects"
  element={
    <ProtectedRoute>
      <ClientProjects />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;