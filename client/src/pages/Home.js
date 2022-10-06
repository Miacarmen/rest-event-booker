import React from 'react';

import Hero from '../components/Hero/Hero';
import ImgCarousel from '../components/Carousel/Carousel';
// add description section

import pinkRoses from '../images/trans-pink.png';

const HomePage = () => {

  return (
    <div
      className='bg-base-100 imgContainer'
      style={{
        backgroundImage: `url(${pinkRoses})`,
      }}
    >
      <div className='container m-auto'>
        <Hero />

        <div className='card mb-8 max-w-full bg-base-200 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>Stay Connected</h2>
            <p className='text-lg py-2 '>
              Whether you've been together for 2 months or 20 years, it's easy to fall into a relationship rut, especially if you don't take the time to carve out a little fun together. Looking for things to do as a couple to bring adventure and/or romance to your relationship can help stengthen your bond. The typical dinner-and-a-movie date night is always great, but sometimes you need a spontaneous break from your routine.
            </p>

            <p className='text-lg'>
              We're here to help you explore ideas and think ouside of the box for fun activites to help you connect as a couple, share quality time, and create new memories together. Karaoke, brunch, sunset helicopter rides, night time paddle boarding. Date nights don't always have to be expensive to be fun, but we are here to provide you with a variety of date ideas to help you rekindle the romance all over again and keep the love adventurous. 
            </p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>

        <div className='flex flex-col w-full lg:flex-row mb-9 mt-12'>
          <div className='grid flex-grow h-32 card bg-base-200 rounded-box place-items-center'>
            Find Activities Based on Your Location
          </div>
          <div className='divider lg:divider-horizontal'></div>
          <div className='grid flex-grow h-32 card bg-base-200 rounded-box place-items-center'>
            Find Activities Based on Types, Times, or Days
          </div>
        </div>

        <ImgCarousel />
      </div>
    </div>
  );
};

export default HomePage;
