import allProjects from "../Components/Data/projectsData.json";
import CreateProjects from "../Components/CreateProjects"
import "../Components/Style/Projects.css"

export default function Projects() {

  const newArray = [...allProjects].reverse()

  return (
    <main>
      <h2 className="page-title">Os meus projetos</h2>
      <section className="projects-container">
        <CreateProjects projects={newArray} />
      </section>
    </main>
  );
}
