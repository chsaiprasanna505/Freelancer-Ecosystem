import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";
import "../styles/jobs.css";


function Jobs() {


  const [jobs,setJobs] = useState([]);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");




  useEffect(()=>{

    fetchJobs();

  },[]);





  const fetchJobs = async()=>{

    try{

      setLoading(true);

      const res = await getJobs();


      console.log(
        "JOBS FROM API:",
        res.data.jobs
      );


      setJobs(
        res.data.jobs || []
      );


    }

    catch(error){

      console.log(error);

      setError(
        "Unable to load jobs"
      );

    }

    finally{

      setLoading(false);

    }

  };





  return (


    <div className="jobs-page">



      <div className="jobs-header">


        <h1>
          💼 Available Jobs
        </h1>


        <p>
          Explore opportunities and connect with clients.
        </p>


      </div>






      {
        loading &&

        <h2 className="jobs-message">
          Loading jobs...
        </h2>

      }





      {
        error &&

        <h2 className="jobs-message error">
          {error}
        </h2>

      }





      {
        !loading &&
        jobs.length === 0 &&

        <h2 className="jobs-message">

          No jobs available currently.

        </h2>

      }






      <div className="jobs-grid">


        {
          jobs.map((job)=>(


            <JobCard

              key={job._id || job.id}

              job={job}

            />


          ))
        }


      </div>




    </div>


  );

}


export default Jobs;