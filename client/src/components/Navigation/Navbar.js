import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-daisyui';

const Nav = () => {
  return (
    <div class='navbar bg-base-100 px-4'>
      <div className='navbar-start'>
        <p class='text-xl'>Logo</p>
      </div>
      <div className='navbar-center'>
        <div className='md:flex items-stretch space-x-3 font-medium '>
          <Link to='/' className='hover:text-accent-focus'>
            Home
          </Link>
          <Link to='/events' className='hover:text-accent-focus'>
            Events
          </Link>
          <Link to='/dash' className='hover:text-accent-focus'>
            Dashboard
          </Link>
          <Link to='/contact' className='hover:text-accent-focus'>
            Contact
          </Link>
        </div>
      </div>
      <div className='navbar-end'>
        <Button class='px-2 py-1 rounded-full bg-tahiti hover:bg-accent text-base-100'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Nav;
