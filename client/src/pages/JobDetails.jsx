import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getJob } from "../services/api";
import "../styles/jobDetails.css";


function JobDetails() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [job,setJob] = useState(null);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");




  useEffect(()=>{


    const fetchJob = async()=>{


      try{


        const res = await getJob(id);


        console.log(
          "JOB DETAILS:",
          res.data
        );


        setJob(res.data.job);


      }


      catch(error){


        console.log(error);


        setError(
          error.response?.data?.message ||
          "Failed to load job details"
        );


      }


      finally{


        setLoading(false);


      }


    };



    fetchJob();


  },[id]);






  if(loading){

    return(

      <div className="job-details-page">

        <div className="job-details-card">

          <h2>
            Loading Job Details...
          </h2>

        </div>

      </div>

    );

  }






  if(error){


    return(

      <div className="job-details-page">

        <div className="job-details-card">

          <h2>
            {error}
          </h2>

        </div>

      </div>

    );

  }







  if(!job){


    return(

      <div className="job-details-page">

        <div className="job-details-card">

          <h2>
            Job Not Found
          </h2>

        </div>

      </div>

    );

  }






  return(


    <div className="job-details-page">



      <div className="job-details-card">



        <button

          className="back-btn"

          onClick={()=>navigate("/jobs")}

        >

          ← Back To Jobs

        </button>







        <div className="job-details-header">


          <div>

            <h1>
              {job.title}
            </h1>


            <p className="job-company">

              {job.company || "Freelance Project"}

            </p>


          </div>



          <span className="job-badge">

            Hiring

          </span>



        </div>








        <h3>
          Job Description
        </h3>


        <p className="job-description">

          {job.description ||
          "No description available"}

        </p>








        <h3>
          Required Skills
        </h3>



        <div className="job-skills">


          {
            job.skills?.map((skill,index)=>(


              <span
                key={index}
                className="skill-tag"
              >

                {skill}

              </span>


            ))
          }



        </div>








        <div className="details-info">


          <div>

            💰

            <strong>
              Budget
            </strong>


            <p>
              ₹{job.budget}
            </p>

          </div>





          <div>

            📍

            <strong>
              Location
            </strong>


            <p>
              {job.location || "Remote"}
            </p>


          </div>




        </div>








        <Link

          to={`/apply-job/${job._id}`}

        >

          <button className="apply-btn">

            Apply Now 🚀

          </button>


        </Link>





      </div>


    </div>


  );

}


export default JobDetails;