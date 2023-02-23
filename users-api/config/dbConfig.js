const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGO_DB_URI, (req, res) => {
    console.log(`Database Connected`.cyan.inverse)
  })
}

module.exports = connectDB
