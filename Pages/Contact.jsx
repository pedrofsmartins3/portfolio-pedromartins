import React from "react"
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Contact.css"
import { TextContext } from "../App"

export default function Contact() {

  const { text } = React.useContext(TextContext)

  return (
    <main>
      <section>
        <h1 className="page-title">{text.contact.title}</h1>

        <h2 className="contact-title">{text.contact.email}</h2>
        <p className="contact-description">pedrofsmartins3@gmail.com</p>

        <h2 className="contact-title">{text.contact.phone}</h2>
        <p className="contact-description">+351 930593707</p>
      </section>
      <RecentProjects />
    </main>
  );
}