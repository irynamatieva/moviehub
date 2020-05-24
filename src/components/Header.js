import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../mhlogo.png';

function Header() {
  const [open, setOpen] = useState(false);
  const navClassNames = open ? 'nav-links nav-active' : 'nav-links';
  const burgerClass = open ? 'burger open' : 'burger';
  
  return (
    <header>
      <Link to='/'>
        <img src={Logo} alt='' className='logo' />{' '}
      </Link>
      <nav>
        <ul className={navClassNames}>
          <li>
            <Link to='/' className='navLink' onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='navLink' onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link to='/contact' className='navLink' onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
        <div className={burgerClass} onClick={() => setOpen(!open)}>
          <div className='line1' />
          <div className='line2' />
          <div className='line3' />
        </div>
      </nav>
    </header>
  );
}

export default Header;
