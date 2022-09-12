// Event has:
// multiple reservations/users

// eventId, title, summary, description, dates, start time, end time, price, location(long, lat), address, image, timestamp, openings, bookings
const { Schema, model } = require('mongoose');

function parseDate(date) {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

const eventSchema = new Schema(
  {
    eventId: {
        type: Number,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
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
    startTime: {
      type: Number,
      required: true,
    },
    endTime: {
        type: Number,
        required: true,
      },
    price: {
        type: Number,
        required: true,
    },
    // long and lat 
    location: {
      type: {
        type: String,
        enum: ['Point'], // location.type must be Point
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
      }
    },
    address: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: parseDate
    },
    openings: {
        type: Number,
    },
    bookings: {
        type: Number,
        default: 0,
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
  }
);

eventSchema.index({eventName: 'text', summary: 'text'});
eventSchema.index({loc: '2dsphere'});

const Event = model('Event', eventSchema);

module.exports = Event;
