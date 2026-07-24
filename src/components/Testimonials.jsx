import testimonials from "../data/testimonials";
import "../styles/testimonials.css";
import { Quote } from "lucide-react";

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonial-header">

        <span className="testimonial-tag">
          ⭐ Testimonials
        </span>

        <h2>
          What Our <span>Users Say</span>
        </h2>

        <p>
          Thousands of freelancers and clients trust SkillSphere
          to build successful projects together.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div
            className="testimonial-card"
            key={item.id}
          >

            <div className="quote-icon">
              <Quote size={30} />
            </div>

            <div className="stars">
              {"⭐".repeat(item.rating)}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="testimonial-user">

              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>

                <h3>
                  {item.name}
                </h3>

                <span>
                  {item.role}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;