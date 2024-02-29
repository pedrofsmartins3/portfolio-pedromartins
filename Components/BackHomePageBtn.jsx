import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { pt, eng } from "./Data/Text";
import { LanguageContext } from "../App";
import { motion } from "framer-motion";

function BackHomePageBtn() {
  const { language } = useContext(LanguageContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="btn-backhome-div"
    >
      <Link className="home-btn" to="/">
        {language === "pt" ? pt.homeBtn : eng.homeBtn}
      </Link>
    </motion.div>
  );
}

export default BackHomePageBtn;
