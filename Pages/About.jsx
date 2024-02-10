import React from "react";
import myPhoto from "/assets/pedro.png";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/About.css";
import { TextContext } from "../App";

export default function About() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section className="head-container">
        <h1 className="page-title">{text.about.title}</h1>
        <img
          className="about-img"
          alt="Pedro's Photo"
          src={myPhoto}
          width="150px"
        />
      </section>
      <section>
        <h2 className="page-subtitle">{text.about.question1}</h2>
        <p className="description">{text.about.answer1}</p>
        <h2 className="page-subtitle">{text.about.question2}</h2>
        <p className="description">{text.about.answer2}</p>
      </section>
      <RecentProjects />
    </main>
  );
}
