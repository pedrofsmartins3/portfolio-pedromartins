import React from "react";
import "../Components/Style/Certifications.css";
import { TextContext, LanguageContext } from "../App";
import { motion } from "framer-motion";

export default function CreateCertificates({ certifications }) {
  const { text } = React.useContext(TextContext);
  const { language } = React.useContext(LanguageContext);

  const certificate = certifications.map((proj) => (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      key={proj.id}
      className="certificate-div"
    >
      <img
        className="certificate-img"
        src={`/assets/certificates/${proj.img}`}
      />
      <h2 className="certificate-title">{proj.title}</h2>
      <span className="certificate-date">
        {text.createcertificate.datetext}: {proj.date}
      </span>
      <p className="certificate-description">{proj.description}</p>
    </motion.div>
  ));

  return certificate;
}
