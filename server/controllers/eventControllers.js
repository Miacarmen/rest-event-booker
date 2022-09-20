const { Event } = require('../models');

// const tempEventData = require('../utils/eventData.json');


module.exports = {
  // GET all events
  getEvents(req, res) {
    Event.find({}, (err, result) => {
      if(err) {
        console.log(err);
        return res.status(500).json({ message: `Failed to load data records` });
      }
      res.status(200).json(result);
    })
  },

  // GET single event by eventId
  // getSingleEvent(req, res) {
  //   const eventId = req.params.id;
  //   const event = tempEventData.find(e => {
  //     return e.id === eventId;
  //   })
  //   res.json({ event });
  // },
  getSingleEvent: async (req, res) => {
    const eventId = req.params.id;
    let event;
    try {
      event = await Event.findById(eventId);
    } catch (err) {
      console.log(err, { message: 'No Event found with that ID' });
    }
    res.json({ event });
  },

  // CREATE new event
  createEvent: async (req, res) => {
    const { title, summary, description, duration, days, hours, price, openings, bookings, imageURL } = req.body;

    const newEvent = new Event({
      title, summary, description, duration, days, hours, price, openings, bookings, imageURL
    });

    try {
      await newEvent.save();
    } catch (err) {
      console.error(err)
    }
    res.status(201).json({ event: newEvent });
  }

  // UPDATE event by eventId

  // DELETE event by eventId
  // remove from all Users who booked
  // update those User's bookings data
};
