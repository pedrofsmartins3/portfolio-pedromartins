import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Foto-Pedro.png";
import Toggle from "./Toggle/Toggle";
import ToggleLanguage from "./Toggle/ToggleLanguage";
import "./Style/Header.css";
import { TextContext } from "../App";

export default function Header() {
  const [navStyle, setNavStyle] = React.useState({});
  const { text } = React.useContext(TextContext);

  function openNav() {
    setNavStyle({ display: "flex", top: "0" });
  }

  function closeNav() {
    setNavStyle({ top: "100%" });
  }

  return (
    <header>
      <div className="div-logo">
        <Link className="header-logo" to="/">
          <div className="logo">
            <img className="logo-img" src={logo} alt="logo" width="50px" />
            <h3 className="logo-title">{text.header.title}</h3>
          </div>
        </Link>
      </div>
      <div style={{ margin: 10 }}>
        <Toggle />
      </div>
      <ToggleLanguage />
    </header>
  );
}
