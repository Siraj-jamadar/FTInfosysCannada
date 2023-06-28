import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'antd';

import './navbar.css';

import appLogo from '../../../../assets/images/app-logo.webp';

const Navbar = _ => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const screenWidth = window.screen.availWidth;

    if (screenWidth <= 920) setIsMobile(true);
  }, []);

  const toggle = _ => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img alt='app-logo' className='cm-img-class' src={appLogo} />
          </Link>
        </div>
        <input type='checkbox' id='click' checked={isOpen} onChange={e => setIsOpen(e.target.checked)} />
        <label htmlFor='click' className='menu-btn'>
          <i className='fas fa-bars'></i>
        </label>
        <ul>
          <li>
            <NavLink activeclassname='active' to='/' onClick={_ => toggle()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/about-us' onClick={_ => toggle()}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/our-services' onClick={_ => toggle()}>
              Our Services
            </NavLink>
          </li>
          <li className='contact-us-btn-li'>
            <Link to='/contact-us' onClick={_ => toggle()}>
              <Button className='contact-us-btn'>Contact Us</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
