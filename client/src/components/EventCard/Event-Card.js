import React from 'react';
import SmButton from '../Buttons/SmButton';
// on click of button, redirect to full page details of the clicked event

// dynamically render image, title, and short description of event from the database

const EventCard = () => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl'>
      <figure>
        <img
          src='https://images.pexels.com/photos/2562096/pexels-photo-2562096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Event Title</h2>
        <p>Event Description</p>
        <div className='card-actions justify-end'>
          <SmButton />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
