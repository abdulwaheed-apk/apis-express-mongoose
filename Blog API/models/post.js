const mongoose = require("mongoose")

const schema = mongoose.Schema

const postSchema = new schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
})

module.exports = mongoose.model("BlogPost", postSchema)
