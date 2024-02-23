import React from "react";
import CreateCertificates from "../Components/CreateCertificates";
import "../Components/Style/Certifications.css";
import { TextContext, LanguageContext } from "../App";
import { pt, eng } from "../Components/Data/Certificates";
// import HTML from "/assets/HTML.png";
// import CSS from "/assets/CSS.png";
// import JAVASCRIPT from "/assets/JAVASCRIPT.png";
// import TYPESCRIPT from "/assets/TYPESCRIPT.png";
import REACT from "/assets/reactjs.png";
// import ROUTER from "/assets/ROUTER.png";
// import FIREBASE from "/assets/firebase.png";
// import NEXTJS from "/assets/nextjs.png";
// import SANITY from "/assets/sanity.png";
// import REACTNATIVE from "/assets/reactnative.png";
// import TAILWIND from "/assets/tailwind.jpg";
// import VERCEL from "/assets/vercel.png";
import { skillsData } from "../Components/Data/Skills";
import { motion } from "framer-motion";

export default function Certifications() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const data = language === "pt" ? pt : eng;

  const newArray = [...data].reverse();

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
        {/* <img src={HTML} alt="html-logo" />
        <img src={CSS} alt="css-logo" />
        <img src={JAVASCRIPT} alt="javascript-logo" />
        <img src={TYPESCRIPT} alt="typescript-logo" />
        <img src={REACT} alt="react-logo" />
        <img src={ROUTER} alt="react-router-logo" />
        <img src={FIREBASE} alt="react-router-logo" />
        <img src={NEXTJS} alt="react-router-logo" />
        <img src={SANITY} alt="react-router-logo" />
        <img src={REACTNATIVE} alt="react-router-logo" />
        <img src={TAILWIND} alt="react-router-logo" />
        <img src={VERCEL} alt="VERCEL-router-logo" /> */}
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
    </main>
  );
}
