const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
      match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
      minlength: [6, "Password must be at least 6 characters"]
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema)