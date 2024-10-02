import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projectscreated.css'; // For any additional custom styling

const projectsData = [
  {
    title: "Service Provider Platform",
    created: "3 months ago",
    closedDate: "Mar 24, 2024",
    proposals: 0,
    messages: 16,
    hired: 0,
  },
  {
    title: "Service Provider Platform",
    created: "3 months ago",
    closedDate: "Mar 24, 2024",
    proposals: 0,
    messages: 16,
    hired: 0,
  },
  // Add more projects if needed
];

const ProjectItem = ({ title, created, closedDate, proposals, messages, hired }) => (
  <div className="row py-3 border-bottom">
    <div className="col-md-4 project-created">
      <h5>{title}</h5>
      <p className="text-muted">Created {created}</p>
      <p className="text-muted">Closed: {closedDate}</p>
    </div>
    <div className="col-md-4 d-flex gap-2 text-center">
      <p className="mb-1">{proposals} Proposals</p>
      <p className="mb-1">{messages} Messages</p>
      <p className="mb-1">{hired} Hired</p>
    </div>
    <div className="col-md-4 text-end d-flex justify-content-end align-items-center">
      <button className="btn btn-success me-2">Repost</button>
      <button className="btn btn-outline-secondary">...</button>
    </div>
  </div>
);

const ProjectsCreated = () => (
  <div className="container mt-4">
    <div className="row mb-4">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <h4>Projects Created</h4>
        <button className="btn btn-primary">Fill × Hug</button>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by
          </button>
          <ul className="dropdown-menu" aria-labelledby="filterDropdown">
            <li><a className="dropdown-item" href="#">Option 1</a></li>
            <li><a className="dropdown-item" href="#">Option 2</a></li>
          </ul>
        </div>
      </div>
    </div>

    {projectsData.map((project, index) => (
      <ProjectItem key={index} {...project} />
    ))}
  </div>
);

export default ProjectsCreated;
