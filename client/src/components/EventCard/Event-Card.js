import React from 'react';
import { Button } from 'react-daisyui';

const EventCard = () => {
  return (
    <div class='card w-96 bg-neutral shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title'>Event Title</h2>
        <p>Event Description</p>
        <div class='card-actions justify-end'>
          <Button class='btn btn-sm rounded-full border-none bg-secondary hover:bg-bubble-gum text-neutral'>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
