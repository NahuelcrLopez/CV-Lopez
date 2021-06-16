import React from "react";
import CartWidget from "./CartWidget.";
import Nl from './img/NL.jpg';
import NavBarStyle from "./style/NavBarStyle.css";
export default function NavBar() {
  return (
    <header>
      <img className="logo" src={Nl} alt=""  />
      <a className="nombrePrincipal" href="#">Nahuel Lopez</a>
      <ul>
        <li>Inicio</li>
        <li>Categoria</li>
        <li>Contacto</li>
      </ul>
    </header>
  );
}
