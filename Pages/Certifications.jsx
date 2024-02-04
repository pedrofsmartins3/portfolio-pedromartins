import React from "react"
import CreateCertificates from "../Components/CreateCertificates"
import "../Components/Style/Certifications.css"
import { TextContext, LanguageContext } from "../App"
import { pt, eng } from "../Components/Data/Certificates"

export default function Certifications() {

  const { text } = React.useContext(TextContext)
  const { language } = React.useContext(LanguageContext)

  const data = language === "pt" ? pt : eng

  const newArray = [...data].reverse()

  return (
    <main>
      <h2 className="page-title">{text.certifications.title}</h2>
      <section className="certificates-container">
        <CreateCertificates certifications={newArray} />
      </section>
      <br></br>
    </main>
  );
}