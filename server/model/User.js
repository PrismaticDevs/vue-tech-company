const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    minLength: 4,
    maxLength: 24,
    required: [
      true,
      "Username is required and must be a minimum of 4 and maximum of 24",
    ],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (value) {
        return isEmail(value);
      },
      message: function (userObject) {
        return `${userObject.email} is not a valid email address`;
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

const User = model("User", userSchema);

module.exports = User;
