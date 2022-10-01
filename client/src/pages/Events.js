import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard/Event-Card';

// Components
import SearchBar from '../components/SearchBar/SearchBar';

// TO-DO: map through events in database to create a card for each

const Events = () => {
  const [eventData, setEventData] = useState([]);

useEffect(() => {
  const baseURL = 'http://localhost:4000/api/events';
  axios.get(baseURL).then((res) => {
    setEventData(res.data);
    console.log(res.data);
  })
}, []);



  return (
    <div className='bg-silver'>
      <div className='container mx-auto pt-12 pb-16 content-center '>
        <SearchBar />
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
          {eventData.map((event) => <EventCard 
        key={event._id}
        title={event.title}
        summary={event.summary}
        image={event.imageURL[0]}
        />
        )}
          {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
