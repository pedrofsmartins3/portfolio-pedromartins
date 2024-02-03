import React from "react"
import allProjects from "../Components/Data/projectsData.json";
import CreateProjects from "../Components/CreateProjects"
import "../Components/Style/Projects.css"

export default function Projects() {

  const [visible, setVisible] = React.useState(6)

  function show() {
    setVisible(prev => prev === 6 ? allProjects.length : 6)
    console.log(visible)
  }

  const showBtnText = visible === 6 ? "Show more..." : "Show less..."

  const newArray = [...allProjects].reverse().slice(0, visible)

  return (
    <main>
      <h2 className="page-title">Os meus projetos</h2>
      <section className="projects-container">
        <CreateProjects projects={newArray} />
      </section>
      <button className="showmore" onClick={show}>{showBtnText}</button>
    </main>
  );
}
