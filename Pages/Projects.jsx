import { Link } from "react-router-dom";
import allProjects from "../Components/Data/projectsData.json";

export default function Projects() {

  const projects = allProjects.map((proj) => (
    <div key={proj.id} className="project-div">
      <Link to={`/projects/${proj.id}`}>
        <img className="project-img" src={`/assets/${proj.img}`} />
        <div className="project-title-div">
          <h2 className="project-title">{proj.title}</h2>
          <span className="project-date">{proj.date}</span>
        </div>
        <p className="project-description">{proj.minidescription}</p>
      </Link>
    </div>
  ));

  return (
    <main>
      <h2 className="page-title">Os meus projetos</h2>
      <section className="projects-container">{projects}</section>
    </main>
  );
}