import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            SkillSphere
          </h2>

          <p>
            Connecting talented freelancers with amazing opportunities.
          </p>

        </div>


        <div className="footer-links">

          <div>
            <h3>
              Platform
            </h3>

            <a href="#">
              Find Jobs
            </a>

            <a href="#">
              Freelancers
            </a>

            <a href="#">
              Post Project
            </a>

          </div>



          <div>
            <h3>
              Company
            </h3>

            <a href="#">
              About
            </a>

            <a href="#">
              Contact
            </a>

            <a href="#">
              Privacy
            </a>

          </div>


        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 SkillSphere. All rights reserved.
        </p>

      </div>


    </footer>
  );
}

export default Footer;