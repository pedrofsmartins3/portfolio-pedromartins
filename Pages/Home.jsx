import React, { useEffect } from "react";
import banner from "/assets/Pedro-banner.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Components/Style/Home.css";
import { LanguageContext, TextContext, ThemeContext } from "../App";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import RecentProjects from "../Components/RecentProjects";
import Certifications from "../Components/Certifications";
import Contact from "../Components/Contact";

export default function Home() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemeContext);

  const loopText =
    language === "pt"
      ? ["Pedro Martins", "inovador,", "programador!"]
      : ["Pedro Martins", "innovation,", "a developer!"];

  const [loopTextTitle, count] = useTypewriter({
    words: loopText,
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  {
    /* TODO: Clean up CSS code */
  }

  return (
    <main id="home">
      <section className="home_header" id="hero">
        <motion.div
          initial={{
            x: 100,
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          animate={{ x: 0 }}
          className="banner_div"
        >
          <img className="banner" src={banner} alt="code-img" />
        </motion.div>
        <motion.div
          initial={{
            x: 100,
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          animate={{ x: 0 }}
          className="banner_div"
        >
          <h1 className="title">
            {language === "pt" ? "Eu sou" : "I am"}
            <br />
            <span className="title-span">
              {loopTextTitle}
              <Cursor cursorColor="#146c86" />
            </span>
          </h1>
        </motion.div>
      </section>
      <section className="home-questions">
        <h2 className="homepage-subtitle">{text.home.question1}</h2>
        <p className="description">{text.home.answer1}</p>
      </section>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="topProjects_title">Top Projects</h2>
      </motion.div>
      <section id="projects" className="topProjects_container">
        <RecentProjects />

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <button className="home-btn">{text.projectsdetail.backbtn}</button>
          </Link>
        </motion.div>
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="btn-top"
      >
        <ArrowUpCircleIcon color="#146c86" />
      </button>
    </main>
  );
}
