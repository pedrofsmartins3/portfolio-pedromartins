import React, { useEffect } from "react";
import "../Components/Style/Contact.css";
import { TextContext } from "../App";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import RecentProjects from "../Components/RecentProjects";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { text } = React.useContext(TextContext);

  const notify = () => {
    toast.loading("Loading the page...");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <section className="about-page">
        <h2 className="page-title">{text.contact.sendEmail}</h2>
        <p className="contact-div">
          <EnvelopeIcon className="contactIcon" />
          pedrofsmartins3@gmail.com
        </p>

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

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="recentprojects-title">{text.recentprojects.title}</h2>
        </motion.div>
        <RecentProjects />
      </section>
    </main>
  );
}
