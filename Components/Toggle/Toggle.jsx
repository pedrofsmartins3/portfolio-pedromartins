import React from "react";
import { ThemeContext } from "../../App"
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";

export default function Toggle() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function themeChange() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  localStorage.setItem("key", JSON.stringify(theme));

  const icon = theme === "dark" ? <BsToggle2On /> : <BsToggle2Off />;

  return (
    <div className="toggle-container">
      <button className="toggle" onClick={themeChange}>
        {icon}
      </button>
    </div>
  );
}