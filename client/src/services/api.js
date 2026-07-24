import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// ================= AUTH APIs =================

// Register User
export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

// Login User
export const loginUser = (userData) => {
  return API.post("/auth/login", userData);
};

// ================= JOB APIs =================

// Get All Jobs
export const getJobs = () => {
  return API.get("/jobs");
};

// Get Single Job
export const getJob = (id) => {
  return API.get(`/jobs/${id}`);
};

// Create Job
export const createJob = (jobData) => {
  return API.post("/jobs", jobData);
};
// ================= APPLICATION APIs =================

// Apply for Job
export const applyJob = (applicationData) => {
  return API.post("/applications", applicationData);
};

// Get All Applications
export const getApplications = (freelancerId) => {
  return API.get(`/applications?freelancer=${freelancerId}`);
};
// Update Application Status
export const updateApplicationStatus = (id, status) => {
  return API.put(`/applications/${id}`, { status });
};
export default API;