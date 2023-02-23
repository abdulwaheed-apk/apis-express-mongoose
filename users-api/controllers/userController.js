const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const userRegister = async (req, res) => {
  const { email, phone, password, role } = req.body
  if (!email || !phone || !password || !role) {
    res.status(400).json({ message: 'Bad Request' })
  }
  try {
    const userExist = await User.findOne({ email })
    if (userExist) {
      res.status(400).json({ message: 'User With similar email already exist' })
    }
    // todo Hash PassWord
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //todo Register User
    const user = await User.create({
      email,
      phone,
      password: hashedPassword,
      role,
    })
    if (user) {
      res.cookie('token', generateToken(user._id))
      res.status(201).json(user)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
// res.cookie(token, generateToken(user._id))

// todo User Login
const userLogin = async (req, res) => {
  const { email, password } = req.body
  // todo find user with requested email and password
  const user = await User.findOne({
    email: email,

    // password: bcrypt.compare(password, hashedPassword),
  })
  try {
    if (!user) {
      res
        .status(400)
        .json({ message: "Can't Find User with this email and password" })
    }
    // const userID = user._id
    else if (
      user &&
      jwt.verify(generateToken(user._id), process.env.JWT_SECRET_KEY)
    ) {
      const result = bcrypt.compare(password, user.password)
      if (result) res.status(200).json({ message: 'You can Login' })
    } else {
      res.cookie('token2', generateToken(user._id))
      res.status(200).json({ message: 'New Token Created' })
    }
  } catch (err) {
    console.error(message, err.message)
  }
}
const userLogout = async (req, res) => {
  res.send('logout')
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
}

module.exports = {
  userLogin,
  userRegister,
  userLogout,
}
