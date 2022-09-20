// Event has:
// multiple reservations/users

// title, summary, description, days, duration, hours,  price, address, image, openings, bookings
const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
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
    duration: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // // long and lat
    // location: {
    //   type: {
    //     type: String,
    //     enum: ['Point'], // location.type must be Point
    //     required: true
    //   },
    //   coordinates: {
    //     type: [Number],
    //     required: true,
    //   }
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },
    openings: {
      type: Number,
    },
    // references the User Schema
    // bookings: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
    bookings: {
      type: Number,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
  },
  {
    // include virtuals with our response to override the default behavior
    toJSON: {
      virtuals: true,
    },
  }
);

eventSchema.index({ eventName: 'text', summary: 'text' });
eventSchema.index({ loc: '2dsphere' });

const Event = model('Event', eventSchema);

module.exports = Event;
