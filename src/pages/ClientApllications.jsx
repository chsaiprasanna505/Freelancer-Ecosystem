import { useEffect, useState } from "react";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../services/api";

import "../styles/jobs.css";

function ClientApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await getAllApplications();
      setApplications(res.data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);

      alert(`Application ${status}`);

      fetchApplications();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="jobs-page">
      <h1>Applications Received</h1>

      <div className="jobs-grid">
        {applications.map((app) => (
          <div className="job-card" key={app._id}>
            <h2>{app.job?.title}</h2>

            <h4>{app.freelancer?.name}</h4>

            <p>
              <strong>Email:</strong> {app.freelancer?.email}
            </p>

            <p>
              <strong>Cover Letter:</strong>
            </p>

            <p>{app.coverLetter}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    app.status === "Accepted"
                      ? "limegreen"
                      : app.status === "Rejected"
                      ? "red"
                      : "orange",
                }}
              >
                {app.status}
              </span>
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <button
                className="dashboard-btn"
                onClick={() =>
                  handleStatus(app._id, "Accepted")
                }
              >
                Accept
              </button>

              <button
                className="dashboard-btn"
                style={{ background: "#ef4444" }}
                onClick={() =>
                  handleStatus(app._id, "Rejected")
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientApplications;import { useEffect, useState } from "react";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../services/api";

import "../styles/clientApplications.css";


function ClientApplications() {


  const [applications,setApplications] = useState([]);



  useEffect(()=>{

    fetchApplications();

  },[]);




  const fetchApplications = async()=>{


    try{


      const res = await getAllApplications();


      setApplications(
        res.data.applications
      );


    }

    catch(error){

      console.log(error);

    }


  };






  const handleStatus = async(id,status)=>{


    try{


      await updateApplicationStatus(
        id,
        status
      );


      alert(
        `Application ${status} successfully ✅`
      );


      fetchApplications();


    }


    catch(error){


      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );


    }


  };







  return(


    <div className="client-applications-page">


      <div className="client-applications-header">


        <h1>
          Applications Received
        </h1>


        <p>
          Review freelancer proposals and manage hiring decisions.
        </p>


      </div>







      <div className="applications-grid">



        {
          applications.length > 0 ? (


            applications.map((app)=>(


              <div

                className="client-application-card"

                key={app._id}

              >




                <div className="application-job">


                  <h2>
                    {app.job?.title}
                  </h2>


                  <span className="application-status">

                    {app.status}

                  </span>


                </div>






                <div className="freelancer-info">


                  <h3>
                    👤 {app.freelancer?.name}
                  </h3>


                  <p>

                    📧 {app.freelancer?.email}

                  </p>


                </div>








                <div className="cover-letter">


                  <h4>
                    Cover Letter
                  </h4>


                  <p>
                    {app.coverLetter}
                  </p>


                </div>









                <div className="application-actions">


                  <button

                    className="accept-btn"

                    onClick={()=>handleStatus(
                      app._id,
                      "Accepted"
                    )}

                  >

                    Accept

                  </button>





                  <button

                    className="reject-btn"

                    onClick={()=>handleStatus(
                      app._id,
                      "Rejected"
                    )}

                  >

                    Reject

                  </button>



                </div>






              </div>


            ))



          ):(


            <div className="no-applications">


              <h2>
                No Applications Yet
              </h2>


              <p>
                Freelancers applications will appear here.
              </p>


            </div>


          )

        }



      </div>



    </div>


  );

}


export default ClientApplications;