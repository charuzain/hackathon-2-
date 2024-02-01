
import { Link } from 'react-router-dom';
import './Header.scss'; 
import Logo from "../../assets/13.png"
const Header = () => {
  return (
   <nav>
    <ul>
       <Link>
            <li className='header__logo-wrap'>
                <img src={Logo} alt="logo" />
            </li>
       </Link>
       <li className='header__home'>
            Home
       </li>
       <li className='header__menu'>
            Menu
       </li>
       <li className='header__about'>
            About Us
       </li>
       <li className='header__facility'>
            Facility
       </li>
       
    </ul>
   </nav>
  );
};

export default Header;
