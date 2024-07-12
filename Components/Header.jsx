import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Foto-Pedro.png";
import Toggle from "./Toggle/Toggle";
import ToggleLanguage from "./Toggle/ToggleLanguage";
import "./Style/Header.css";
import { TextContext } from "../App";

export default function Header() {
  const { text } = useContext(TextContext);

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
