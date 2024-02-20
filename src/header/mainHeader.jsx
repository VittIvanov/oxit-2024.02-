import logo from "../assets/home/headerLogo1.svg"
import React from "react";


const MainHeader = () => {
  return (
    <React.Fragment>
      <header className="main-header">
        <div className="main-header--logo">

          <img className="header-logo__img" src={logo} alt="Описание вашего логотипа" />

        </div>


        <div class="droplist">
          <div class="droplist_burger-menu" id="burger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul class="droplist_menu active" id="menu">
            <div class="droplist_in_burger-menu">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <li><a href="#">Carrer</a></li>
            <li><a href="#">Tender reports</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

      </header >
    </React.Fragment >
  )
}

export default MainHeader;
