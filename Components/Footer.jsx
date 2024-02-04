import React from "react"
import SocialIcons from "./SocialIcons";
import "./Style/Footer.css"
import { TextContext } from "../App"

export default function Footer() {

  const { text } = React.useContext(TextContext)

  return (
    <footer>
      <SocialIcons />
      <p className="footer-title">{text.footer.title}</p>
      <p className="footer-copyright">Copyright ©2023</p>
    </footer>
  );
}
