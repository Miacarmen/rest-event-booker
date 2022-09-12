import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './nav.styles.css';
// TO-DO: change color of current nav tab

// TO-DO: if user not logged in, display login button
// if they are logged in, display logout button

const Nav = () => {
  return (
    <div className='navbar bg-base-200 px-4'>
      <div className='navbar-start'>
        <p className='text-xl'>Logo</p>
      </div>
      <div className='navbar-center'>
        <div className='md:flex items-stretch space-x-3 font-medium '>
          <NavLink to='/' className='navLink hover:text-secondary'>
            Home
          </NavLink>
          <NavLink to='/events' className='navLink hover:text-secondary'>
            Events
          </NavLink>
          <NavLink to='/dash' className='navLink hover:text-secondary'>
            Dashboard
          </NavLink>
          <NavLink to='/contact' className='navLink hover:text-secondary'>
            Contact
          </NavLink>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='btn btn-sm px-2 rounded-full bg-neutral hover:bg-neutral-focus '>
          Login
        </div>
      </div>
    </div>
  );
};

export default Nav;
