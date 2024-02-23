import React from "react";
import CreateProjects from "./CreateProjects";
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Projects";
import { motion } from "framer-motion";

export default function RecentProjects() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const allProjects = language === "pt" ? pt : eng;

  const newArray = allProjects
    .slice(allProjects.length - 3, allProjects.length)
    .reverse();

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="recentprojects-title">{text.recentprojects.title}</h2>
      </motion.div>
      <section className="projects-container">
        <CreateProjects projects={newArray} />
      </section>
    </>
  );
}
