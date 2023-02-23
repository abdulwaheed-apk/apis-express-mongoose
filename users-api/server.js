const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cookies = require('cookie-parser')
const onlyAdminMiddleware = require('./middlewares/onlyAdminMiddleware')
const app = express()
const connectDB = require('./config/dbConfig')

// *Connect DB
connectDB()

//* Builtin Middleware's
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookies())
app.get('/', (req, res) => {
  res.send('Public page Any one can access')
})

app.use('/user', require('./routes/userRoute'))

app.get(
  ['/allCourses', '/allStudents', '/allTeachers'],
  onlyAdminMiddleware,
  async (req, res) => {
    res.send('Only Admin Allowed')
  }
)

// * Server Running
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`.magenta.underline)
})
