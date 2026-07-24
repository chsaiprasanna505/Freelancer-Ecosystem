import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import StatCard from "../components/StatCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";


function ClientDashboard() {

  const { user } = useAuth();
  const navigate = useNavigate();


  const jobs = [
    {
      title: "Frontend React Developer",
      budget: "₹25,000",
      applicants: 15,
      status: "Active"
    },
    {
      title: "UI/UX Designer",
      budget: "₹18,000",
      applicants: 9,
      status: "Reviewing"
    },
    {
      title: "Node.js Backend Developer",
      budget: "₹30,000",
      applicants: 12,
      status: "Active"
    }
  ];


  const applications = [
    "Rahul applied for React Developer",
    "Sarah submitted UI Design proposal",
    "David completed interview",
    "Alex sent project proposal"
  ];


  const freelancers = [
    {
      name:"Alex Johnson",
      role:"React Developer",
      rating:"⭐ 4.9"
    },
    {
      name:"Sarah Williams",
      role:"UI/UX Designer",
      rating:"⭐ 4.8"
    },
    {
      name:"David Smith",
      role:"Full Stack Developer",
      rating:"⭐ 4.7"
    }
  ];


  return (

    <div className="dashboard-container">


      <Sidebar />


      <div className="dashboard-content">


        <DashboardNavbar />



        {/* Header */}

        <div className="dashboard-header">


          <h1>
            Welcome back, {user?.name || "Client"} 👋
          </h1>


          <p>
            Manage hiring, projects and connect with skilled freelancers.
          </p>


          <button
            className="dashboard-btn"
            onClick={()=>navigate("/post-job")}
          >
            + Post New Job
          </button>


        </div>





        {/* Stats */}


        <div className="stats-grid">


          <StatCard
            title="Jobs Posted"
            value="12"
            color="#3b82f6"
            icon="💼"
          />


          <StatCard
            title="Active Projects"
            value="5"
            color="#10b981"
            icon="🚀"
          />


          <StatCard
            title="Applications"
            value="48"
            color="#8b5cf6"
            icon="📄"
          />


          <StatCard
            title="Freelancers Hired"
            value="8"
            color="#f59e0b"
            icon="👥"
          />


        </div>






        {/* Job + Applications */}



        <div className="dashboard-grid">



          <div className="dashboard-box">


            <h2>
              💼 Recent Job Posts
            </h2>


            <div className="dashboard-list">


              {jobs.map((job,index)=>(


                <div
                  className="activity-item"
                  key={index}
                >


                  <h3>
                    {job.title}
                  </h3>


                  <p>
                    Budget: {job.budget}
                  </p>


                  <p>
                    Applicants: {job.applicants}
                  </p>


                  <span className="job-status">
                    {job.status}
                  </span>


                </div>


              ))}



            </div>



          </div>






          <div className="dashboard-box">


            <h2>
              👥 Latest Applications
            </h2>


            <div className="dashboard-list">


              {applications.map((item,index)=>(


                <div
                  className="activity-item"
                  key={index}
                >

                  {item}

                </div>


              ))}


            </div>



          </div>



        </div>







        {/* Analytics + Actions */}



        <div className="dashboard-grid">



          <div className="dashboard-box">


            <h2>
              📊 Hiring Progress
            </h2>



            <div className="skill">

              <span>
                Applications Reviewed
                <b>75%</b>
              </span>

              <progress value="75" max="100"/>

            </div>




            <div className="skill">

              <span>
                Interviews Completed
                <b>55%</b>
              </span>

              <progress value="55" max="100"/>

            </div>





            <div className="skill">

              <span>
                Projects Completed
                <b>65%</b>
              </span>


              <progress value="65" max="100"/>


            </div>



          </div>







          <div className="dashboard-box">


            <h2>
              🚀 Quick Actions
            </h2>



            <button
              className="dashboard-btn"
              onClick={()=>navigate("/client-applications")}
            >
              📄 View Applications
            </button>




            <button
              className="dashboard-btn"
              onClick={()=>navigate("/client-projects")}
            >
              📁 Manage Projects
            </button>




            <button
              className="dashboard-btn"
              onClick={()=>navigate("/post-job")}
            >
              ➕ Create New Job
            </button>



          </div>




        </div>







        {/* Top Freelancers */}



        <div className="dashboard-box">


          <h2>
            ⭐ Top Freelancers
          </h2>



          <div className="dashboard-list">


          {freelancers.map((person,index)=>(


            <div
              className="activity-item"
              key={index}
            >


              <h3>
                {person.name}
              </h3>


              <p>
                {person.role}
              </p>


              <span>
                {person.rating}
              </span>


            </div>


          ))}


          </div>



        </div>





      </div>


    </div>

  );
}


export default ClientDashboard;