import React from "react";
import "../Components/Style/Certifications.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";

export default function CreateCertificates({ certifications }) {
  const { text } = React.useContext(TextContext);
  const certificate = certifications.map((proj, index) => (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      key={proj.id}
      className={`certificate-div ${index % 2 !== 0 ? "reverse" : "normal"}`}
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
