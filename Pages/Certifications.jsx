import React, { useEffect } from "react";
import CreateCertificates from "../Components/CreateCertificates";
import "../Components/Style/Certifications.css";
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Certificates";
import { skillsData } from "../Components/Data/Skills";
import { motion } from "framer-motion";
import BackHomePageBtn from "../Components/BackHomePageBtn";

export default function Certifications() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const data = language === "pt" ? pt : eng;

  const newArray = [...data].reverse();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

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
      <h2 className="page-title">{text.certifications.title}</h2>
      <section className="certificates-container">
        <CreateCertificates certifications={newArray} />
      </section>
      <br></br>
      <BackHomePageBtn />
    </main>
  );
}
