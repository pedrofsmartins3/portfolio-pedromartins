import React from "react";
import { Link } from "react-router-dom";

export default function CreateProjects({ projects }) {
  const project = projects.map((proj) => (
    <div key={proj.id} className="project-div">
      <Link to={`/projects/${proj.id}`}>
        <img className="project-img" src={`/assets/${proj.img}`} />
        <div className="project-title-div">
          <h2 className="project-title">{proj.title}</h2>
          <span className="project-date">{proj.date}</span>
        </div>
        <p className="project-description">{proj.minidescription}...</p>
      </Link>
    </div>
  ));

  return project;
}
