import React from "react";
import { ThemeContext } from "../../App"
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";
import "./Toggle.css"

export default function Toggle() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function themeChange() {
    setTheme((prevTheme) => (!prevTheme));
  }

  localStorage.setItem("theme", JSON.stringify(theme));

  const icon = theme ? <BsToggle2On /> : <BsToggle2Off />;

  return (
    <div className="toggle-container">
      <button className="toggle" onClick={themeChange}>
        {icon}
      </button>
    </div>
  );
}