import allProjects from "../Components/Data/projectsData.json";
import { useParams, Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "../Components/Style/Projects.css"

export default function ProjectsDetail() {
  const params = useParams();
  return (
    <main>
      <Link to=".." relative="path" className="back-link">
        <span className="icon">
          <FaArrowCircleLeft />
        </span>
        <span>...Voltar para Projetos!</span>
      </Link>
      <section className="project-container">
        <div key={allProjects[params.id - 1].id} className="projectDetail-div">
          <h2 className="page-title">{allProjects[params.id - 1].title}</h2>
          <img
            className="project-img"
            src={`/assets/${allProjects[params.id - 1].img}`}
          />

          <span className="project-date">
            {allProjects[params.id - 1].date}
          </span>
          <p className="project-description">
            {allProjects[params.id - 1].description}
          </p>
        </div>
        <h3 className="project-subtitle">Onde posso encontar o código?</h3>
        <a
          className="project-link"
          target="_blank"
          href={allProjects[params.id - 1].repository}
          rel="noreferrer"
        >
          Clique aqui para ver o código!
        </a>
        <h3 className="project-subtitle">E o site??</h3>
        <a
          className="project-link"
          target="_blank"
          href={allProjects[params.id - 1].site}
          rel="noreferrer"
        >
          Clique aqui para ver o site!
        </a>
      </section>
    </main>
  );
}