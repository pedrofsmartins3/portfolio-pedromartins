import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "../Components/Style/Projects.css";
import { TextContext, LanguageContext, ThemeContext } from "../App";
import { pt, eng } from "../Components/Data/Projects";
import { motion } from "framer-motion";

export default function ProjectsDetail() {
  const params = useParams();
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemeContext);

  const [showGif, setShowGif] = useState(false);

  const allProjects = language === "pt" ? pt : eng;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      {/* IMG + TITLE */}

      <Link to=".." relative="path" className="back-link">
        <span className="icon">
          <FaArrowCircleLeft />
        </span>
        <span>...{text.projectsdetail.backbtn}</span>
      </Link>
      <section className="project-container">
        <div key={allProjects[params.id - 1].id} className="projectDetail-div">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="page-title">{allProjects[params.id - 1].title}</h2>
            <img
              className="project-img-detail"
              src={`/assets/projects/${allProjects[params.id - 1].img}`}
            />
          </motion.div>

          {/* CODE BTN */}

          <div className="project-link-div">
            {allProjects[params.id - 1].repository && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="project-link-btn btn-left"
              >
                <a
                  className="project-link"
                  target="_blank"
                  href={allProjects[params.id - 1].repository}
                  rel="noreferrer"
                >
                  {text.projectsdetail.codebtn}
                </a>
              </motion.div>
            )}

            {/* SITE BTN */}

            {allProjects[params.id - 1].site && (
              <motion.div
                className="project-link-btn btn-right"
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <a
                  className="project-link"
                  target="_blank"
                  href={allProjects[params.id - 1].site}
                  rel="noreferrer"
                >
                  {text.projectsdetail.sitebtn}
                </a>
              </motion.div>
            )}

            {/* GIF BTN */}

            {allProjects[params.id - 1].gif && (
              <motion.div
                className="project-link-btn btn-right"
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <button
                  className="project-link"
                  onClick={() => setShowGif(!showGif)}
                >
                  Show GIF!
                </button>
              </motion.div>
            )}
          </div>

          {/* GIF IMG */}

          {allProjects[params.id - 1].gif && showGif && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={`/assets/projects/${allProjects[params.id - 1].gif}-${theme ? "black" : "white"}.gif`}
                alt={`${allProjects[params.id - 1].name} gif`}
                className="project-gif"
              />
            </motion.div>
          )}

          {/* DESCRIPTION */}

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="project-date">
              {allProjects[params.id - 1].date}
            </span>
            <p className="project-description">
              {allProjects[params.id - 1].description}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
