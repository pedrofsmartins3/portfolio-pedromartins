import React from "react"
import { Link } from "react-router-dom"
import "../Components/Style/NotFound.css"
import { TextContext } from "../App"

export default function Contact() {

  const { text } = React.useContext(TextContext)

  return (
    <main>
        <h1>{text.notfound.title}</h1>
        <Link to="/" className="notfound-btn">{text.notfound.btn}</Link>
    </main>
  );
}