// User has multiple reservations
// firstName, lastName, email, password, [reservations]
const { Schema, model } = require('mongoose');
// const eventSchema = require('./Event');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
    role: {
        type: String
    }
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
userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });

// Password Validation
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// userSchema
//   .virtual('eventsBookedCount')
//   // retrieve length of user's `reservations` array field on query
//   .get(function () {
//     return this.eventsBooked.length;
//   });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
