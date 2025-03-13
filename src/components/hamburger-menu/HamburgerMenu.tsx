/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CancelWhite } from 'assets/icons';
import { Link } from 'react-scroll';
import './HamburgerMenu.scss';

interface HamburgerMenuProps {
  visibility: boolean;
  onCancel: () => void;
}
function HamburgerMenu({ visibility, onCancel }: HamburgerMenuProps) {
  return (
    <div className={'hamburger-menu-container' + (visibility ? '' : ' hidden')}>
      <div className="cancel-icon" onClick={onCancel}>
        <CancelWhite />
      </div>
      <div className="nav-links">
        <Link
          to="about"
          onClick={() => {
            onCancel();
          }}
          smooth
          duration={500}
        >
          <div className="link">About</div>
        </Link>

        <Link
          to="work"
          onClick={() => {
            onCancel();
          }}
          smooth
          duration={500}
        >
          <div className="link">Work</div>
        </Link>

        <Link
          to="contact"
          onClick={() => {
            onCancel();
          }}
          smooth
          duration={500}
        >
          <div className="link">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
