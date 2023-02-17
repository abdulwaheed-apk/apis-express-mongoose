const express = require("express")
const mongoose = require("mongoose")
const posts = require("./routes/api/post")
const app = express()
mongoose
  .connect("mongodb://localhost:27017/posts")
  .then(console.log("MongoDB Connected"))
  .catch((error) => console.log(error.message))
const port = 5000

app.get("/", (req, res) => {
  res.send("Hello")
})
app.use(express.json({ extended: false }))

app.use("/posts", posts)

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`)
})
