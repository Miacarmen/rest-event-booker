import React from 'react';
import { Link } from 'react-router-dom';

import './hero.styles.css';
// Components
import LgButton from '../Buttons/LgButton';

const Hero = () => {
  return (
    <div
      className='hero min-h-screen'
      // style={{
      //   backgroundImage: `url(${pinkRoses})`,
      // }}
    >
      <div className='hero-content text-center mb-64 fadeInLeft'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Welcome to Harp</h1>
          <p className='py-6 text-lg'>
            Find the perfect get aways and activities for you and the one you
            love to enjoy some romantic "just the two of us" time, that's so
            much more than dinner and a movie.
          </p>
          <Link to='/events'>
            <LgButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
