import React from "react";
import CreateProjects from "../Components/CreateProjects";
import "../Components/Style/Projects.css";
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Projects";

export default function Projects() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const [visible, setVisible] = React.useState(6);

  const allProjects = language === "pt" ? pt : eng;

  function show() {
    setVisible((prev) => (prev === 6 ? allProjects.length : 6));
  }

  const showBtnText =
    visible === 6
      ? `${text.projects.btnShowMore}`
      : `${text.projects.btnShowLess}`;

  const newArray = [...allProjects].reverse().slice(0, visible);

  return (
    <main>
      <h2 className="page-title">{text.projects.title}</h2>
      <section className="projects-container">
        <CreateProjects projects={newArray} />
      </section>
      <button className="showmore" onClick={show}>
        {showBtnText}
      </button>
    </main>
  );
}
