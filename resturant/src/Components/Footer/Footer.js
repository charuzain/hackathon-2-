import "./Footer.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/13.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__img-wrap">
          <img src={logo} alt="logo" className="footer__img" />
        </div>
        <div className="footer__list-wrap">
          <ul className="footer__list">
           <Link to={'/'}>
           <li className="footer__item">Home</li>
           </Link>
           <Link to={'/menu'}>
           <li className="footer__item">Menu</li>
           </Link>
            <li className="footer__item">About Us</li>
            <li className="footer__item">Facility</li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">@copyright2024 </p>
    </footer>
  );
}

export default Footer;
