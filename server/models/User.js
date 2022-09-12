// User has multiple reservations
// firstName, lastName, username, email, password, [reservations]
const { Schema, model } = require('mongoose');
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
    username: {
      type: String,
      required: true,
      unique: true,
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
    reservations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
  },
  {
    // include virtuals with our response to override the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('fullName')
  .get(() => {
    return `${this.firstName} ${this.lastName}`;
    // Setter to set the first and last name
  })
  .set((v) => {
    const firstName = v.split(' ')[0];
    const lastName = v.split(' ')[1];
    this.set({ firstName, lastName });
  });

// Hash User Password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Password Validation
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
