import React from "react"
import { useParams, Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "../Components/Style/Projects.css"
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Projects"

export default function ProjectsDetail() {
  const params = useParams();
  const { text } = React.useContext(TextContext)
  const { language } = React.useContext(LanguageContext)

  const allProjects = language === "pt" ? pt : eng

  return (
    <main>
      <Link to=".." relative="path" className="back-link">
        <span className="icon">
          <FaArrowCircleLeft />
        </span>
        <span>...{text.projectsdetail.backbtn}</span>
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
        <h3 className="project-subtitle">{text.projectsdetail.question1}</h3>
        <a
          className="project-link"
          target="_blank"
          href={allProjects[params.id - 1].repository}
          rel="noreferrer"
        >
          {text.projectsdetail.answer1}
        </a>
        <h3 className="project-subtitle">{text.projectsdetail.question2}</h3>
        <a
          className="project-link"
          target="_blank"
          href={allProjects[params.id - 1].site}
          rel="noreferrer"
        >
          {text.projectsdetail.answer2}
        </a>
      </section>
    </main>
  );
}