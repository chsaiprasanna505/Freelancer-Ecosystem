import applications from "../data/applications";
import "../styles/applications.css";
import { useNavigate } from "react-router-dom";


function MyApplications() {


  const navigate = useNavigate();



  return (


    <div className="applications-page">



      <div className="applications-header">


        <div>

          <h1>
            My Applications
          </h1>


          <p>
            Track your job applications and hiring progress.
          </p>

        </div>



        <button

          className="browse-jobs-btn"

          onClick={()=>navigate("/jobs")}

        >

          Browse Jobs

        </button>


      </div>







      <div className="applications-grid">


        {applications.length > 0 ? (


          applications.map((app)=>(


            <div

              className="application-card"

              key={app.id}

            >



              <div className="application-top">


                <div>


                  <h2>
                    {app.jobTitle}
                  </h2>


                  <p>
                    {app.company}
                  </p>


                </div>



                <span

                  className={`status ${app.status.toLowerCase()}`}

                >

                  {app.status}

                </span>



              </div>







              <div className="application-info">


                <div>

                  <span>
                    Budget
                  </span>


                  <strong>
                    {app.budget}
                  </strong>


                </div>



                <div>

                  <span>
                    Applied On
                  </span>


                  <strong>
                    {app.date || "Recently"}
                  </strong>


                </div>


              </div>







              <button

                className="view-application-btn"

                onClick={()=>navigate("/jobs")}

              >

                View Job →

              </button>





            </div>


          ))



        ):(


          <div className="empty-applications">


            <h2>
              No Applications Yet
            </h2>


            <p>
              Start applying for jobs to see them here.
            </p>


            <button

              onClick={()=>navigate("/jobs")}

            >

              Find Jobs

            </button>


          </div>


        )}



      </div>



    </div>


  );

}


export default MyApplications;