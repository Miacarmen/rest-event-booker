// User has multiple reservations
// firstName, lastName, email, password, [reservations]
const { Schema, model } = require('mongoose');
// const eventSchema = require('./Event');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // email regex
        'Please enter a valid email address',
      ],
    },
    password: {
      type: String,
      required: true,
      mingLength: 8,
    },
    // references the event schema
    // eventsBooked: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Event',
    // },
  },
  {
    // include virtuals with our response to override the default behavior
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash User Password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
//   next();
// });

// Password Validation
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// userSchema
//   .virtual('eventsBookedCount')
//   // retrieve length of user's `reservations` array field on query
//   .get(function () {
//     return this.eventsBooked.length;
//   });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
