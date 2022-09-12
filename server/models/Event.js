// Event has:
// multiple reservations/users
// title, description, dates, location(long, lat), address, image, timestamp, spots available
const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dates: {
      type: Date,
      required: true,
    },
    location: {
      type: Number,
      Required: true,
    },
    address: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Timestamp,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    // include virtuals with our response to override the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


const Event = model('Event', eventSchema);

module.exports = Event;