import React from "react"
import "../Components/Style/Certifications.css"
import { TextContext, LanguageContext } from "../App"

export default function CreateCertificates( {certifications} ) {

    const { text } = React.useContext(TextContext)
    const { language } = React.useContext(LanguageContext)

    const certificate = certifications.map((proj) => (
        <div key={proj.id} className="certificate-div">
            <img className="certificate-img" src={`/assets/${proj.img}`} />
            <h2 className="certificate-title">{proj.title}</h2>
            <span className="certificate-date">{text.createcertificate.datetext}: {proj.date}</span>
            <p className="certificate-description">{proj.description}</p>
        </div>
    ))
    
    return certificate
}