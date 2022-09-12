import React from 'react';
import EventCard from '../components/EventCard/Event-Card';

// Components
import SearchBar from '../components/SearchBar/SearchBar';
import SearchFilter from '../components/Filter/SearchFilter';

// TO-DO: map through events in database to create a card for each
const Events = () => {
  return (
    <div className='wrapper bg-silver'>
      <div className='container mx-auto pt-12 pb-16 content-center '>
        <SearchBar />
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
