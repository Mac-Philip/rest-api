const express = require("express");

//create a variable called router
const router = express.Router();

//import the model you wanna post to
const Post = require("../models/Post");

router.get("/", (req, res) => {
  //response
  res.send("i have your post response");
});

//post something
router.post("/", (req, res) => {
  //access the information to post to the API
  //console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  //save to the database
  post
    .save()
    .then((data) => {
      //respond to the json data in the body
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
