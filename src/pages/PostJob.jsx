import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJob } from "../services/api";
import "../styles/postJob.css";


function PostJob() {

  const navigate = useNavigate();


  const [loading,setLoading] = useState(false);


  const [jobData,setJobData] = useState({

    title:"",
    company:"",
    description:"",
    skills:"",
    budget:"",
    location:""

  });



  const handleChange = (e)=>{

    setJobData({

      ...jobData,

      [e.target.name]:e.target.value

    });

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);


      await createJob({

        ...jobData,

        skills:jobData.skills
        .split(",")
        .map(skill=>skill.trim())

      });



      alert("Job Posted Successfully ✅");


      navigate("/client-dashboard");


    }

    catch(error){

      alert(
        error.response?.data?.message ||
        "Failed to Post Job"
      );

    }

    finally{

      setLoading(false);

    }


  };





  return (


    <div className="post-job-page">



      <div className="post-job-card">


        <button
          className="back-btn"
          onClick={()=>navigate("/client-dashboard")}
        >
          ← Back Dashboard
        </button>




        <h1>
          Create New Job 🚀
        </h1>



        <p>
          Find talented freelancers and build your team.
        </p>




        <form onSubmit={handleSubmit}>


          <label>
            Job Title
          </label>

          <input

            type="text"

            name="title"

            placeholder="Frontend Developer"

            value={jobData.title}

            onChange={handleChange}

            required

          />




          <label>
            Company Name
          </label>


          <input

            type="text"

            name="company"

            placeholder="Company Name"

            value={jobData.company}

            onChange={handleChange}

            required

          />





          <label>
            Job Description
          </label>


          <textarea

            name="description"

            placeholder="Describe the project requirements..."

            rows="6"

            value={jobData.description}

            onChange={handleChange}

            required

          />





          <label>
            Required Skills
          </label>


          <input

            type="text"

            name="skills"

            placeholder="React, Node.js, MongoDB"

            value={jobData.skills}

            onChange={handleChange}

            required

          />





          <label>
            Budget
          </label>


          <input

            type="number"

            name="budget"

            placeholder="25000"

            value={jobData.budget}

            onChange={handleChange}

            required

          />





          <label>
            Location
          </label>


          <input

            type="text"

            name="location"

            placeholder="Remote / Hyderabad"

            value={jobData.location}

            onChange={handleChange}

          />





          <button
            className="submit-job-btn"
            type="submit"
            disabled={loading}
          >

            {
              loading
              ?
              "Posting..."
              :
              "Post Job"
            }


          </button>




        </form>



      </div>



    </div>


  );

}


export default PostJob;