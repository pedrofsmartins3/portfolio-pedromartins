import React from "react"
import CreateProjects from "./CreateProjects"
import { TextContext, LanguageContext } from "../App"
import { pt, eng } from "../Components/Data/Projects"

export default function RecentProjects() {

  const { text } = React.useContext(TextContext)
  const { language } = React.useContext(LanguageContext)

  const allProjects = language === "pt" ? pt : eng

  const newArray = allProjects.slice(allProjects.length - 3, allProjects.length).reverse()

  return (
      <>
        <h2 className="recentprojects-title">{text.recentprojects.title}</h2>
        <section className="projects-container">
          <CreateProjects projects={newArray}/> 
        </section>
      </>
  )

}
