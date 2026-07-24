import "../styles/recentProjects.css";

function RecentProjects() {
  const projects = [
    {
      name: "E-Commerce Website",
      client: "John Smith",
      budget: "₹25,000",
      status: "In Progress",
    },
    {
      name: "Portfolio Website",
      client: "Sarah Lee",
      budget: "₹12,000",
      status: "Completed",
    },
    {
      name: "Mobile App UI",
      client: "David Wilson",
      budget: "₹30,000",
      status: "Pending",
    },
  ];

  return (
    <div className="projects-card">
      <h2>Recent Projects</h2>

      <table className="projects-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Client</th>
            <th>Budget</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.client}</td>
              <td>{project.budget}</td>
              <td>
                <span
                  className={`status ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentProjects;