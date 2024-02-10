import React from "react";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Contact.css";
import { TextContext } from "../App";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import SocialIcons from "../Components/SocialIcons";

export default function Contact() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section>
        <h1 className="page-title">{text.contact.title}</h1>

        <h2 className="contact-title">{text.contact.email}:</h2>
        <p className="contact-description email">
          <span>
            <MdEmail className="email-icon" />
          </span>
          pedrofsmartins3@gmail.com
        </p>

        <h2 className="contact-title">{text.contact.phone}:</h2>
        <p className="contact-description">
          <span>
            <FaPhoneAlt className="phone-icon" />
          </span>
          +351 930593707
        </p>
        <h2 className="contact-title ">{text.contact.social}:</h2>
        <p className="contact-description social-media">
          <SocialIcons />
        </p>
      </section>
      <RecentProjects />
    </main>
  );
}
