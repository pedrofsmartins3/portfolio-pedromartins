import allProjects from "../Components/Data/projectsData.json";
import CreateProjects from "./CreateProjects"

export default function RecentProjects() {

  const newArray = allProjects.slice(allProjects.length - 3, allProjects.length)

  return (
      <>
        <h2 className="recentprojects-title">Projetos mais recentes:</h2>
        <section className="projects-container">
          <CreateProjects projects={newArray}/> 
        </section>
      </>
  )

}
