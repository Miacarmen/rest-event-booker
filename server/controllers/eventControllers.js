const { Event } = require('../models');

module.exports = {
  // GET all events
  getEvents: async (req, res) => {
    let events;
    try {
      events = await Event.find({});
    
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json(err, { message: 'Failed to load data records' });
    }
  },

  // GET single event by eventId
  getSingleEvent: async (req, res) => {
    Event.findOne({ _id: req.params.eventId })
      .select('-__v')
      .then((event) =>
        !event
          ? res.status(404).json({ message: 'No event with that ID' })
          : res.json(event)
      )
      .catch((err) =>
        res.status(500).json(err, { message: 'Failed to load data records' })
      );
  },

  // CREATE new event
  createEvent: async (req, res) => {
    const {
      title,
      summary,
      description,
      duration,
      days,
      hours,
      price,
      openings,
      bookings,
      image,
    } = req.body;

    let existingEvent;
    // check if event already in database
    try {
      existingEvent = await Event.findOne({ title: title });
    } catch (err) {
      console.error(err, { message: 'Create Event Failed, try again' });
    }

    if (existingEvent) {
      console.error('This event already exists');
    }

    const newEvent = new Event({
      title,
      summary,
      description,
      duration,
      days,
      hours,
      price,
      openings,
      bookings,
      image,
    });

    try {
      await newEvent.save();
    } catch (err) {
      console.error(err);
    }
    res.status(200).json({ messgae: 'New event created', event: newEvent });
  },

  // DELETE event by eventId
  // remove from all Users who booked
  // update those User's bookings data
  deleteEvent: async (req, res) => {
    let event;
    try {
      event = await Event.findOneAndDelete({ _id: req.params.eventId });
      res.status(200).json({ message: 'Event successfully deleted' });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to delete event',
      });
    }
  },

  // UPDATE event by eventId
  updateEvent: async (req, res) => {
    let event;
    try {
      event = await Event.findById({ _id: req.params.eventId });
      if(!event) {
        res.sendStatus(404);
        return;
      }
      event.image = req.body.image;
      await event.save();
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
};
