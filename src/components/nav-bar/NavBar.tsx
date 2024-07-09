import './NavBar.scss';
import logo from '../../assets/images/logo3.png';

function NavBar() {
  return (
    <div className="nav">
      <div className="name-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <div className="name">
            Weronika Zaprawa | Junior Frontend Developer
          </div>
        </div>
      </div>
      <div className="nav-links">
        <div className="link">About</div>
        <div className="link">Work</div>
        <div className="link">Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
