import React from "react"
import "../Components/Style/Certifications.css"
import { Navigate } from "react-router-dom"

export default function CreateCertificates( {certifications} ) {

    const certificate = certifications.map((proj) => (
        <div key={proj.id} className="certificate-div">
            <img className="certificate-img" src={`/assets/${proj.img}`} />
            <h2 className="certificate-title">{proj.title}</h2>
            <span className="certificate-date">Data de finalização: {proj.date}</span>
            <p className="certificate-description">{proj.description}</p>
        </div>
    ))
    
    return certificate
}