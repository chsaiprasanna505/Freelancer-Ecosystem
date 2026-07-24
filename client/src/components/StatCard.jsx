import "../styles/statcard.css";

function StatCard({ title, value, color, icon }) {

  return (

    <div className="stat-card">


      <div
        className="stat-icon"
        style={{ background: color }}
      >
        {icon}
      </div>



      <div className="stat-content">

        <h2>
          {value}
        </h2>


        <p>
          {title}
        </p>


        <span className="stat-growth">
          ↑ 12% this month
        </span>


      </div>


    </div>

  );
}


export default StatCard;