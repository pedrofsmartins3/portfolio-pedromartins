import SocialIcons from "./SocialIcons";
import "./Style/Footer.css"

export default function Footer() {
  return (
    <footer>
      <SocialIcons />
      <p className="footer-title">Portfólio - Pedro Martins</p>
      <p className="footer-copyright">Copyright ©2023</p>
    </footer>
  );
}
