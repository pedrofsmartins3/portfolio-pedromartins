import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Contact.css"

export default function Contact() {
  return (
    <main>
      <section>
        <h1 className="page-title">Contactos</h1>

        <h2 className="contact-title">Email:</h2>
        <p className="contact-description">pedrofsmartins3@gmail.com</p>

        <h2 className="contact-title">Número de telefone:</h2>
        <p className="contact-description">+351 930593707</p>
      </section>
      <RecentProjects />
    </main>
  );
}