import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "../App";
import React from "react";

export default function SocialIcons() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="social-icons-div">
      <SocialIcon
        url="https://linkedin.com/in/pedrofsmartins3"
        fgColor={theme ? "white" : "black"}
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/pedrofsmartins3"
        fgColor={theme ? "white" : "black"}
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.instagram.com/pedrofsmartins3/"
        fgColor={theme ? "white" : "black"}
        bgColor="transparent"
      />
    </div>
  );
}
