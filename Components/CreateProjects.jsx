import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";

export default function CreateProjects({ projects }) {
  const { theme } = useContext(ThemeContext);

  const project = projects.map((proj) => (
    <motion.div
      initial={{ opacity: 0.8, x: 25 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      key={proj.id}
      className="topProjects_div"
    >
      <Link to={`/projects/${proj.id}`}>
        <img className="topProjects_img" src={`/assets/projects/${proj.img}`} />
        <div className="topProjects_divDetails">
          <div className="topProjects_title-div">
            <h2 className="topProjects_subtitle">{proj.title}</h2>
            <span className="topProjects_date">{proj.date}</span>
          </div>
          <p className="topProjects_description">{proj.minidescription}...</p>
        </div>
      </Link>
    </motion.div>
  ));

  return project;
}
