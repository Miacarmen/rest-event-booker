import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Harp from '../../images/harp.png';

import './nav.styles.css';

// TO-DO: if user not logged in, display login button
// if they are logged in, display logout button

const Nav = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className='navbar bg-base-200 px-4'>
        <div className='navbar-start'>
          <img src={Harp} alt='logo' width='40px' height='40px' />
        </div>
        <div className='navbar-center'>
          <div className='md:flex items-stretch space-x-3 font-medium '>
            <NavLink to='/' className='navLink hover:text-secondary'>
              Home
            </NavLink>
            <NavLink to='/events' className='navLink hover:text-secondary'>
              Events
            </NavLink>
            <NavLink to='/dashboard' className='navLink hover:text-secondary'>
              Dashboard
            </NavLink>
            <NavLink to='/contact' className='navLink hover:text-secondary'>
              Contact
            </NavLink>
          </div>
        </div>
        <div className='navbar-end'>
          <NavLink to='/login'>
          <button className='btn-sm rounded-full bg-neutral border-none text-base-300 hover:bg-neutral-focus'>
            Login
          </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
