import React, { useEffect } from "react";
import banner from "/assets/Pedro-banner.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Components/Style/Home.css";
import { LanguageContext, TextContext, ThemeContext } from "../App";
import { motion } from "framer-motion";
import { pt, eng } from "../Components/Data/Projects";
import { Link } from "react-router-dom";
import { skillsData } from "../Components/Data/Skills";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import RecentProjects from "../Components/RecentProjects";

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

  const allProjects = language === "pt" ? pt : eng;
  const topProjects = [...allProjects].reverse().slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main id="home">
      <section className="home_header" id="hero">
        <motion.div
          initial={{
            x: -100,
          }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
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
      <section id="projects" className="topProjects_container">
        <RecentProjects />

        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <button className="home-btn">{text.projectsdetail.backbtn}</button>
          </Link>
        </motion.div>
      </section>

      <section id="certifications">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="page-title">{text.certifications.skills}</h2>
        </motion.div>
        <div className="skills">
          {skillsData.map((skill) => (
            <motion.div
              initial={{ x: skill.directionLeft ? -100 : 100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              key={skill.name}
              className="skill_div"
            >
              <img className="skill_img" src={skill.url} alt={skill.name} />
              <div className="skill_progress_div">
                <div className="skill_progress_div_text">
                  <h4 className="skill_progress_text">{skill.progress}%</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <Link to="/certifications">
            <button className="home-btn">{text.certifications.btn}</button>
          </Link>
        </motion.div>
      </section>

      <section id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="page-title">{text.contact.title}</h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="contacts-container"
        >
          <div className="contact-div">
            <EnvelopeIcon className="contactIcon" />
            {text.contact.email}
          </div>
          <p className="contact-description">pedrofsmartins3@gmail.com</p>

          <div className="contact-div">
            <PhoneIcon className="contactIcon" />
            {text.contact.phone}
          </div>
          <p className="contact-description">+351 930593707</p>

          <div className="contact-div">
            <MapPinIcon className="contactIcon" />
            {text.contact.address}
          </div>
          <p className="contact-description">Porto, Portugal</p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
            <button className="home-btn">{text.contact.btn}</button>
          </Link>
        </motion.div>
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
