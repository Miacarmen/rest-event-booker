import React from 'react';
// on click of button, redirect to full page details of the clicked event

// dynamically render image, title, and short description of event from the database

const HomeEventCard = () => {
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
        <p className='text-start'>Event Summary</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-sm rounded-full border-none bg-neutral hover:bg-neutral-focus text-base-300'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeEventCard;
