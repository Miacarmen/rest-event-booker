import React from 'react';
import EventCard from '../components/EventCard/Event-Card';

const Events = () => {
  return (
    <div className='wrapper bg-silver'>
      <div className='container mx-auto py-24 content-center'>
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
