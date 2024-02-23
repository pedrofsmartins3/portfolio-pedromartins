import React from "react";
import { Link } from "react-router-dom";
import "../Components/Style/NotFound.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";

export default function Contact() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1>{text.notfound.title}</h1>
      </motion.div>
      <Link to="/" className="notfound-btn">
        {text.notfound.btn}
      </Link>
    </main>
  );
}
