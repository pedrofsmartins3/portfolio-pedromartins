import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/Foto-Pedro.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Toggle from "./Toggle/Toggle";
import "./Style/Header.css"

export default function Header() {
  const [navStyle, setNavStyle] = React.useState({});

  function openNav() {
    setNavStyle({ display: 'flex', top: "0"});
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
            <h3 className="logo-title">Portfólio</h3>
          </div>
        </Link>
      </div>
      <div className="navBtn open" onClick={openNav}>
        <FaBars />
      </div>
      <nav className="mainMenu" style={navStyle}>
        <button className="header-link-btn" onClick={closeNav} >
          <Link className="header-link" to="projects">
            Projetos
          </Link>
        </button>
        <button className="header-link-btn" onClick={closeNav} >
          <Link className="header-link" to="certifications">
            Certificados
          </Link>
        </button>
        <button className="header-link-btn" onClick={closeNav} >
          <Link className="header-link" to="about">
            Sobre mim
          </Link> 
        </button>
        <button className="header-link-btn" onClick={closeNav} >
          <Link className="header-link" to="contact">
            Contactos
          </Link>
        </button>
        <Toggle />
        <div className="navBtn close" onClick={closeNav}>
          <FaTimes />
        </div>
      </nav>
    </header>
  );
}