/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MobileNavBar.scss';
import { useState } from 'react';
import HamburgerMenu from 'components/hamburger-menu/HamburgerMenu';
import hamburgerMenu from '../../assets/images/Hamburger_icon_white.svg.png';
import logo from '../../assets/images/logo3.png';

function NavBar() {
  const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="name-container">
          <div className="name">Weronika Zaprawa&nbsp;</div>
          <div className="position"> | Junior Frontend Developer</div>
        </div>
      </div>
      <div
        className="hamburger-menu"
        onClick={() => {
          setHamburgerMenuVisibility(true);
        }}
      >
        <img src={hamburgerMenu} alt="hamburger menu logo" />
      </div>

      <HamburgerMenu
        visibility={hamburgerMenuVisibility}
        onCancel={() => {
          setHamburgerMenuVisibility(false);
        }}
      />
    </div>
  );
}

export default NavBar;
