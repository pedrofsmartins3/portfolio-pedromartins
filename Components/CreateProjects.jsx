import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CreateProjects({ projects }) {
  const project = projects.map((proj) => (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      key={proj.id}
      className="project-div"
    >
      <Link to={`/projects/${proj.id}`}>
        <img className="project-img" src={`/assets/${proj.img}`} />
        <div className="project-title-div">
          <h2 className="project-title">{proj.title}</h2>
          <span className="project-date">{proj.date}</span>
        </div>
        <p className="project-description">{proj.minidescription}...</p>
      </Link>
    </motion.div>
  ));

  return project;
}
