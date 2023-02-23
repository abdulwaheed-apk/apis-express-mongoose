const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email Already Exist'],
    },
    phone: {
      type: String,
      required: [true, 'Enter Your Phone Number'],
      min: 10,
      max: 15,
    },
    password: {
      type: String,
      required: [true, 'password is require'],
    },
    role: {
      type: String,
      enum: ['Admin', 'Teacher', 'Student'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
