import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import "./Style/SocialIcons.css"

export default function SocialIcons() {
  return (
    <div className="social-icons-div">
      <a
        href="https://www.linkedin.com/in/pedrofsmartins3/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/pedrofsmartins3/"
        target="_blank"
        rel="noreferrer"
        className="instagram"
      >
        <FaSquareInstagram />
      </a>
      <a
        href="https://www.twitter.com/pedrofsmartins2/"
        target="_blank"
        rel="noreferrer"
        className="twitter"
      >
        <FaSquareXTwitter />
      </a>
      <a
        href="https://www.github.com/pedrofsmartins3/"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}