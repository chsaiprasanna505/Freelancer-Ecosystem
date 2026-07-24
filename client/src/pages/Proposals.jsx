import proposals from "../data/proposals";
import "../styles/proposals.css";

function Proposals() {
  return (
    <div className="proposals-page">

      <h1>Job Proposals</h1>

      <div className="proposals-grid">

        {proposals.map((proposal) => (
          <div
            className="proposal-card"
            key={proposal.id}
          >
            <h2>{proposal.freelancer}</h2>

            <p>{proposal.job}</p>

            <strong>Budget: {proposal.budget}</strong>

            <p>Delivery: {proposal.delivery}</p>

            <span className={proposal.status.toLowerCase()}>
              {proposal.status}
            </span>

            <div className="proposal-actions">
              <button className="accept-btn">
                Accept
              </button>

              <button className="reject-btn">
                Reject
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Proposals;