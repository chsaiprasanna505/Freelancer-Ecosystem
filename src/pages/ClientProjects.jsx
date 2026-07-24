import "../styles/clientProjects.css";

function ClientProjects() {

  const projects = [
    {
      title: "Freelancer Hiring Platform",
      freelancer: "Rahul Sharma",
      budget: "₹25,000",
      progress: 80,
      status: "Active",
    },
    {
      title: "Mobile App UI Design",
      freelancer: "Sarah Williams",
      budget: "₹18,000",
      progress: 60,
      status: "In Progress",
    },
    {
      title: "Backend API Development",
      freelancer: "David Kumar",
      budget: "₹30,000",
      progress: 100,
      status: "Completed",
    },
  ];


  return (
    <div className="client-projects-page">

      <div className="projects-header">

        <div>
          <h1>
            📁 My Projects
          </h1>

          <p>
            Manage your active projects and track freelancer progress.
          </p>
        </div>


      </div>



      <div className="projects-grid">

        {projects.map((project,index)=>(

          <div 
            className="project-card"
            key={index}
          >

            <div className="project-top">

              <h2>
                {project.title}
              </h2>


              <span 
                className={
                  project.status
                  .toLowerCase()
                  .replace(" ","-")
                }
              >
                {project.status}
              </span>

            </div>



            <div className="project-details">

              <p>
                👤 Freelancer:
                <strong>
                  {project.freelancer}
                </strong>
              </p>


              <p>
                💰 Budget:
                <strong>
                  {project.budget}
                </strong>
              </p>

            </div>




            <div className="progress-section">

              <div className="progress-text">

                <span>
                  Progress
                </span>

                <b>
                  {project.progress}%
                </b>

              </div>


              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width:`${project.progress}%`
                  }}
                ></div>

              </div>

            </div>



            <button className="manage-btn">
              Manage Project
            </button>


          </div>

        ))}


      </div>


    </div>
  );
}


export default ClientProjects;