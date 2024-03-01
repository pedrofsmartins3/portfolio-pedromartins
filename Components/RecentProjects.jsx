import React from "react";
import CreateProjects from "./CreateProjects";
import { LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Projects";

export default function RecentProjects() {
  const { language } = React.useContext(LanguageContext);

  const allProjects = language === "pt" ? pt : eng;

  const newArray = allProjects
    .slice(allProjects.length - 3, allProjects.length)
    .reverse();

  return (
    <>
      <section className="topProjects_container">
        <CreateProjects projects={newArray} />
      </section>
    </>
  );
}
