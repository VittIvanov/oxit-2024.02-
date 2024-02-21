import logo from "../assets/home/headerLogo1.svg"
import React, { useState } from "react";


const MainHeader = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <React.Fragment>
      <header className="main-header">
        <div className="main-header--logo">

          <img className="header-logo__img" src={logo} alt="Описание вашего логотипа" />

        </div>


        <div class="droplist">
          <div class="droplist_burger-menu" id="burger-menu" onClick={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <div class={
            `droplist_menu ${menuOpen ? 'active' : ''
            }`
          } id="menu">
            <div class="droplist_in_burger-menu" onClick={toggleMenu}>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>


            <ul className="droplist_menu__list">
              <li className="droplist_menu__item"><a href="#">Carrer</a></li>
              <li className="droplist_menu__item"><a href="#">Tender reports</a></li>
              <li className="droplist_menu__item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

      </header >
    </React.Fragment >
  )
}

export default MainHeader;
