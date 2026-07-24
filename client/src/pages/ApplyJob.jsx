import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { applyJob, getJob } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "../styles/applyJob.css";


function ApplyJob() {


  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();



  const [job,setJob] = useState(null);

  const [loading,setLoading] = useState(true);

  const [submitting,setSubmitting] = useState(false);



  const [formData,setFormData] = useState({

    coverLetter:""

  });





  useEffect(()=>{


    const fetchJob = async()=>{


      try{


        const res = await getJob(id);


        setJob(res.data.job);


      }

      catch(error){

        console.log(error);

      }

      finally{

        setLoading(false);

      }


    };



    fetchJob();


  },[id]);







  const handleChange=(e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };







  const handleSubmit=async(e)=>{


    e.preventDefault();



    if(!user){

      alert("Please login first");

      navigate("/login");

      return;

    }




    try{


      setSubmitting(true);



      await applyJob({


        job:job._id,


        freelancer:user._id,


        coverLetter:formData.coverLetter


      });





      alert(
        "Application Submitted Successfully ✅"
      );



      navigate("/my-applications");



    }


    catch(error){


      alert(

        error.response?.data?.message ||

        "Application Failed"

      );


    }


    finally{


      setSubmitting(false);


    }



  };







  if(loading){


    return(

      <div className="apply-page">

        <div className="apply-container">

          <h2>
            Loading...
          </h2>

        </div>

      </div>

    );


  }







  if(!job){


    return(

      <div className="apply-page">


        <div className="not-found-card">


          <h2>
            Job Not Found
          </h2>


          <p>
            This job may have been removed.
          </p>



          <button

            onClick={()=>navigate("/jobs")}

            className="back-jobs-btn"

          >

            ← Back to Jobs

          </button>



        </div>


      </div>

    );


  }







  return(


    <div className="apply-page">


      <div className="apply-container">



        <button

          className="back-button"

          onClick={()=>navigate("/jobs")}

        >

          ← Back to Jobs

        </button>







        <div className="apply-card">






          <div className="apply-header">


            <div className="company-icon">

              {job.company?.charAt(0).toUpperCase()}

            </div>



            <div>


              <span className="apply-label">

                JOB APPLICATION

              </span>



              <h1>

                {job.title}

              </h1>



              <p className="company-name">

                {job.company}

              </p>


            </div>


          </div>








          <div className="job-details">



            <div className="detail-section">


              <h3>

                ✦ Skills Required

              </h3>



              <div className="apply-skills">


                {job.skills?.map((skill,index)=>(


                  <span key={index}>

                    {skill}

                  </span>


                ))}


              </div>



            </div>






            <div className="budget-box">


              <div className="budget-icon">

                ₹

              </div>


              <div>


                <span className="budget-label">

                  PROJECT BUDGET

                </span>



                <strong>

                  {job.budget}

                </strong>



              </div>



            </div>



          </div>








          <div className="section-divider"></div>







          <form onSubmit={handleSubmit}>


            <div className="form-heading">


              <h2>

                Your Proposal

              </h2>



              <p>

                Explain why you are the best fit for this project.

              </p>



            </div>







            <div className="form-group">


              <label>

                Cover Letter *

              </label>



              <textarea


                name="coverLetter"


                placeholder="Write your proposal..."


                value={formData.coverLetter}


                onChange={handleChange}


                required


              />



            </div>








            <button

              className="submit-application-btn"

              type="submit"

              disabled={submitting}

            >

              {

                submitting

                ?

                "Submitting..."

                :

                "Submit Application →"

              }


            </button>



          </form>





        </div>



      </div>


    </div>


  );


}


export default ApplyJob;