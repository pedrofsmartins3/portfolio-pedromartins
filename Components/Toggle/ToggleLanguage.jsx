import React from "react";
import { LanguageContext } from "../../App";
import ptFlag from "/assets/ptflag.png"
import engFlag from "/assets/engflag.png"
import "./ToggleLanguage.css"

export default function ToggleLanguage() {

    const { language, setLanguage } = React.useContext(LanguageContext)

    localStorage.setItem("language", JSON.stringify(language));


    const img = language === "pt" ? engFlag : ptFlag

    function changeLanguage() {
        setLanguage(prev => prev === "pt" ? "eng" : "pt")
    }

    return (
        <button className="changeLanguage" onClick={changeLanguage}><img className="flag" src={img}/></button>
    )

}