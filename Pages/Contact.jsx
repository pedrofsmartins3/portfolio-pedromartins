import React from "react";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Contact.css";
import { TextContext } from "../App";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import SocialIcons from "../Components/SocialIcons";

export default function Contact() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section>
        <h1 className="page-title">{text.contact.title}</h1>

        <div className="contact-div">
          <EnvelopeIcon className="contactIcon" />
          {text.contact.email}
        </div>
        <p className="contact-description">pedrofsmartins3@gmail.com</p>

        <div className="contact-div">
          <PhoneIcon className="contactIcon" />
          {text.contact.phone}
        </div>
        <p className="contact-description">+351 930593707</p>

        <div className="contact-div">
          <MapPinIcon className="contactIcon" />
          {text.contact.address}
        </div>
        <p className="contact-description">Porto, Portugal</p>

        <div className="contact-div">
          <UserCircleIcon className="contactIcon" />
          {text.contact.social}
        </div>
        <p className="social-media">
          <SocialIcons />
        </p>
      </section>
      <RecentProjects />
    </main>
  );
}
