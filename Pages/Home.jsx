import React from "react";
import banner from "/assets/Pedro-banner.jpeg";
import RecentProjects from "../Components/RecentProjects";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "../Components/Style/Home.css";
import { LanguageContext, TextContext } from "../App";
import { motion } from "framer-motion";

export default function Home() {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const loopText =
    language === "eng"
      ? ["Hi, I'm Pedro Martins", "Welcome.js", "<I-Am-Frontend-Developer />"]
      : [
          "Olá, sou o Pedro Martins",
          "BemVindo.js",
          "<Eu-Sou-Frontend-Developer />",
        ];

  const [loopTextTitle, count] = useTypewriter({
    words: loopText,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main>
      <section className="home-header">
        <h1 className="title">
          <span>{loopTextTitle}</span>
          <Cursor cursorColor="#146c86" />
        </h1>
        <motion.div
          initial={{
            x: -100,
          }}
          transition={{ duration: 1.5 }}
          animate={{ x: 0 }}
          className="banner_div"
        >
          <img className="banner" src={banner} alt="code-img" />
        </motion.div>
      </section>
      <section className="home-questions">
        <h2 className="homepage-subtitle">{text.home.question1}</h2>
        <p className="description">{text.home.answer1}</p>
      </section>

      <RecentProjects />
    </main>
  );
}
