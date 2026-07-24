import { Link } from "react-router-dom";


function JobCard({ job }) {


  return (

    <div className="job-card">



      {/* Header */}

      <div className="job-card-header">


        <div>

          <h2>
            {job.title}
          </h2>


          <h4>
            {job.company || "Freelance Project"}
          </h4>


        </div>



        <span className="job-badge">

          Hiring

        </span>



      </div>







      {/* Description */}

      <p className="job-description">

        {job.description
          ? job.description.substring(0,100) + "..."
          : "No description available"
        }

      </p>







      {/* Skills */}


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








      {/* Job Information */}


      <div className="job-info">


        <p>

          <span>
            💰
          </span>


          <strong>
            Budget
          </strong>


          <span>
            ₹{job.budget}
          </span>


        </p>




        {
          job.location &&

          <p>

            <span>
              📍
            </span>


            <strong>
              Location
            </strong>


            <span>
              {job.location}
            </span>


          </p>

        }






        {
          job.applicants &&

          <p>

            <span>
              👥
            </span>


            <strong>
              Applicants
            </strong>


            <span>
              {job.applicants}
            </span>


          </p>

        }




      </div>








      {/* Button */}


      <Link

        to={`/job-details/${job._id}`}

        className="view-job-btn"

      >

        View Details


        <span>
          →
        </span>


      </Link>





    </div>

  );

}


export default JobCard;