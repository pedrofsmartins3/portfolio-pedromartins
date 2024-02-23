import React from "react";
import banner from "/assets/fotopedro.jpg";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Home.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";

export default function Home() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section className="home-header">
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="title">{text.home.title}</h1>
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <p className="title-description">{text.home.titledescription}</p>
        </motion.div>
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
