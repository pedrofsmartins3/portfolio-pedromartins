import allProjects from "../Components/Data/projectsData.json";
import { Link } from "react-router-dom";

export default function RecentProjects() {
  const index1 = allProjects.length - 1;
  const index2 = allProjects.length - 2;
  const index3 = allProjects.length - 3;
  return (
    <>
      <h2 className="recentprojects-title">Projetos mais recentes:</h2>
      <section className="projects-container">
        <div key={allProjects[index1].id} className="project-div">
          <Link to={`/projects/${allProjects[index1].id}`}>
            <img
              className="project-img"
              src={`/assets/${allProjects[index1].img}`}
            />
            <div className="project-title-div">
              <h2 className="project-title">{allProjects[index1].title}</h2>
              <span className="project-date">{allProjects[index1].date}</span>
            </div>
            <p className="project-description">
              {allProjects[index1].minidescription}
            </p>
          </Link>
        </div>
        <div key={allProjects[index2].id} className="project-div">
          <Link to={`/projects/${allProjects[index2].id}`}>
            <img
              className="project-img"
              src={`/assets/${allProjects[index2].img}`}
            />
            <div className="project-title-div">
              <h2 className="project-title">{allProjects[index2].title}</h2>
              <span className="project-date">{allProjects[index2].date}</span>
            </div>
            <p className="project-description">
              {allProjects[index2].minidescription}
            </p>
          </Link>
        </div>
        <div key={allProjects[index3].id} className="project-div">
          <Link to={`/projects/${allProjects[index3].id}`}>
            <img
              className="project-img"
              src={`/assets/${allProjects[index3].img}`}
            />
            <div className="project-title-div">
              <h2 className="project-title">{allProjects[index3].title}</h2>
              <span className="project-date">{allProjects[index3].date}</span>
            </div>
            <p className="project-description">
              {allProjects[index3].minidescription}
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
