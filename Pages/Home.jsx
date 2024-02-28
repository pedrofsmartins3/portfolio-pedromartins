import React, { useEffect } from "react";
import banner from "/assets/Pedro-banner.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Components/Style/Home.css";
import { LanguageContext, TextContext } from "../App";
import { motion } from "framer-motion";
import { pt, eng } from "../Components/Data/Projects";
import { Link } from "react-router-dom";

export default function Home() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const loopText =
    language === "pt"
      ? ["Pedro Martins", "inovador,", "programador!"]
      : ["Pedro Martins", "innovation,", "a developer!"];

  const [loopTextTitle, count] = useTypewriter({
    words: loopText,
    loop: true,
    delaySpeed: 2000,
  });

  const allProjects = language === "pt" ? pt : eng;
  const topProjects = [...allProjects].reverse().slice(0, 3);

  return (
    <main>
      <section className="home_header">
        <motion.div
          initial={{
            x: -100,
          }}
          transition={{ duration: 1.5 }}
          animate={{ x: 0 }}
          className="banner_div"
        >
          <img className="banner" src={banner} alt="code-img" />
        </motion.div>
        <h1 className="title">
          {language === "pt" ? "Eu sou" : "I am"}
          <br />
          <span className="title-span">
            {loopTextTitle}
            <Cursor cursorColor="#146c86" />
          </span>
        </h1>
      </section>
      <section className="home-questions">
        <h2 className="homepage-subtitle">{text.home.question1}</h2>
        <p className="description">{text.home.answer1}</p>
      </section>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="topProjects_title">Top Projects</h2>
      </motion.div>
      <section className="topProjects_container">
        {topProjects.map((proj) => (
          <motion.div
            initial={{ opacity: 0.8, x: 25 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={proj.id}
            className="topProjects_div"
          >
            <Link to={`/projects/${proj.id}`}>
              <img className="topProjects_img" src={`/assets/${proj.img}`} />
              <div className="topProjects_divDetails">
                <div className="topProjects_title-div">
                  <h2 className="topProjects_subtitle">{proj.title}</h2>
                  <span className="topProjects_date">{proj.date}</span>
                </div>
                <p className="topProjects_description">
                  {proj.minidescription}...
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
