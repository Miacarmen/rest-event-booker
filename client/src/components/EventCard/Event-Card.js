import React from 'react';

const EventCard = () => {
  return (
    <div class='card w-96 bg-base-200 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>Event Title</h2>
        <p>Event Description</p>
        <div class='card-actions justify-end'>
          <div class='btn btn-sm rounded-full border-none bg-primary hover:bg-primary-focus text-base-200'>Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
