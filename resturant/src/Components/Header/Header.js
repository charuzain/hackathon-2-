import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/13.png';
const Header = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <div className="nav__logo-wrap">
          <Link to={'/'} className="nav__link">
            <li className="nav__logo">
              <img src={Logo} alt="logo" />
            </li>
          </Link>
        </div>
        <div className="nav__items">
          <Link to={'/'} className="nav__link">
            <li className="nav__home">Home</li>
          </Link>
          <Link to={'/menu'} className="nav__link">
            <li className="nav__menu">Menu</li>
          </Link>
          <li className="nav__about">About Us</li>
          <li className="nav__facility">Facility</li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
