import allProjects from "../Components/Data/projectsData.json";
import CreateProjects from "../Components/CreateProjects"

export default function Projects() {

  const newArray = [...allProjects]

  return (
    <main>
      <h2 className="page-title">Os meus projetos</h2>
      <section className="projects-container">
        <CreateProjects projects={newArray} />
      </section>
    </main>
  );
}
