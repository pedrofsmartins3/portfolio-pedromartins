import React from "react";
import banner from "/assets/pedro.png";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Home.css";
import { TextContext } from "../App";

export default function Home() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section className="home-header">
        <h1 className="title">{text.home.title}</h1>
        <img className="banner" src={banner} alt="code-img" />
        <p className="title-description">{text.home.titledescription}</p>
      </section>
      <section className="home-questions">
        <h2 className="homepage-subtitle">{text.home.question1}</h2>
        <p className="description">{text.home.answer1}</p>
      </section>
      <RecentProjects />
    </main>
  );
}
