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
import { motion } from "framer-motion";

export default function Contact() {
  const { text } = React.useContext(TextContext);

  return (
    <main>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="page-title">{text.contact.title}</h1>
        </motion.div>

        <motion.div
          initial={{
            x: 200,
            y: 50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="contacts-container"
        >
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
        </motion.div>
      </section>
      <RecentProjects />
    </main>
  );
}
