import React from 'react';

// on click of button, redirect to full page details of the clicked event

// dynamically render image, title, and short description of event from the database
const EventCard = () => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Event Title</h2>
        <p>Event Description</p>
        <div className='card-actions justify-end'>
          <div className='btn btn-sm rounded-full border-none bg-primary hover:bg-primary-focus text-base-200'>Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
