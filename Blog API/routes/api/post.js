const express = require("express")
const BlogPost = require("../../models/post")
const router = express.Router()

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await BlogPost.find()
  res.json(posts)
})

router.post("/", async (req, res) => {
  const newPost = new BlogPost({
    title: req.body.title,
    description: req.body.description,
  })
  const post = await newPost.save()
  res.json(post)
})
module.exports = router
