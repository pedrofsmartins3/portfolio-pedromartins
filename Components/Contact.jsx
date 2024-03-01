import React, { useState } from "react";
import "../Components/Style/Contact.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { text } = React.useContext(TextContext);
  const [showForms, setShowFroms] = useState(false);

  const notify = () => {
    toast.loading("Sending message...", {
      duration: 2000,
    });
  };

  return (
    <main>
      <section className="about-page">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="page-title">{text.contact.title}</h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          transition={{ duration: 1.5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="contacts-container"
        >
          <div className="contact-div">
            <EnvelopeOpenIcon className="contactIcon" />
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
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          transition={{ duration: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <button onClick={() => setShowFroms(!showForms)} className="home-btn">
            {text.contact.btn}
          </button>
        </motion.div>

        {showForms && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="forms-div"
          >
            <h2 className="page-title">{text.contact.sendEmail}</h2>

            <form
              method="POST"
              action="https://getform.io/f/xe7j1Bd7"
              className="contact-form"
            >
              <div>
                <input
                  placeholder="Name"
                  className="contactInput"
                  type="text"
                  name="name"
                />
                <input
                  placeholder="Email"
                  className="contactInput"
                  type="email"
                  name="email"
                />
              </div>
              <input
                placeholder="Subject"
                className="contactInput"
                type="text"
                name="message"
              />

              <textarea placeholder="Messge" className="contactInput" />

              <button onClick={notify} type="submit">
                Submit
              </button>
              <Toaster />
            </form>
          </motion.div>
        )}
      </section>
    </main>
  );
}
