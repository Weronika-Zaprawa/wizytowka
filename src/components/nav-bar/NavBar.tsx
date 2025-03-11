import './NavBar.scss';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo3.png';

function NavBar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="name-container">
          <div className="name">
            Weronika Zaprawa | Junior Frontend Developer
          </div>
        </div>
      </div>
      <div className="nav-links">
        <Link to="about" smooth duration={500}>
          <div className="link">About</div>
        </Link>

        <Link to="work" smooth duration={500}>
          <div className="link">Work</div>
        </Link>

        <Link to="contact" smooth duration={500}>
          <div className="link">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
