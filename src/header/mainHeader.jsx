import logo from "../assets/home/headerLogo1.svg"
import React from "react";


const MainHeader = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <div className="main-header--logo">

          <img className="header-logo__img" src={logo} alt="Описание вашего логотипа" />

        </div>


        <div>
          <a href="*" className='visually-hidden'>
            Contact Us
          </a>
        </div>

      </header >
    </React.Fragment >
  )
}

export default MainHeader;
