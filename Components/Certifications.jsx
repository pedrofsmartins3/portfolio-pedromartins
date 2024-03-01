import React, { useEffect, useState } from "react";
import CreateCertificates from "./CreateCertificates";
import "../Components/Style/Certifications.css";
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "./Data/Certificates";
import { skillsData } from "./Data/Skills";
import { motion } from "framer-motion";

export default function Certifications() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const data = language === "pt" ? pt : eng;

  const newArray = [...data].reverse();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <main>
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
          y: 100,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setShowCertificates(!showCertificates)}
          className="home-btn"
        >
          {text.certifications.btn}
        </button>
      </motion.div>

      {showCertificates && (
        <div className="show-certificates">
          <h2 className="page-title">{text.certifications.title}</h2>
          <section className="certificates-container">
            <CreateCertificates certifications={newArray} />
          </section>
        </div>
      )}
    </main>
  );
}
