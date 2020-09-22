import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'




function Navbar() {
   const [click, setClick] = useState(false);
   const [dropdown, setDropdown] = useState(false);

   const handleClick = () => setClick(!click);

   const closeMobileMenu = () => setClick(!false);

   return (
      <div>

         <nav className="navbar">
            <Link to='/' className="navbar-logo">
               Logo
            </Link>
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
                  <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                     Home
                  </Link>
               </li>
               <li className="nav-item">
                  <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                     Services <i className='fa fa-caret-down' />
                  </Link>
                  {dropdown && <Dropdown
                  />}
               </li>
               <li className="nav-item">
                  <Link to='/contact-us' className='nav-link' onClick={closeMobileMenu}>
                     Contact Us
                  </Link>
               </li>
               <li className="nav-item">
                  <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                     Sign Up
                  </Link>
               </li>
            </ul>
            <Button />

         </nav>
      </div>
   )
}

export default Navbar
