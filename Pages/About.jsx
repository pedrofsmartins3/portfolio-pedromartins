import React from "react";
import myPhoto from "/assets/Foto-Pedro.png";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/About.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";

export default function About() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <motion.div
        className="head-container"
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="about-title">{text.about.title}</h1>
        <img
          className="about-img"
          alt="Pedro's Photo"
          src={myPhoto}
          width="150px"
        />
      </motion.div>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="page-subtitle">{text.about.question1}</h2>
          <p className="description">{text.about.answer1}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="page-subtitle">{text.about.question2}</h2>
          <p className="description">{text.about.answer2}</p>
        </motion.div>
      </section>
      <RecentProjects />
    </main>
  );
}
