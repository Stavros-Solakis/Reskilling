
const PORT = 5000;

const axios = require("axios");
const express = require("express");
const cors = require('cors');
const app = express();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
app.use(cors());

let postsData = "<h1>Loading posts...</h1>";
let photosData = "<h1>Loading photos...</h1>";

/*
Take Data from the jsonplaceholder about the Post and Photos
*/
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    console.log(result);
    postsData = result.data;
  })
  .catch((err) => {
    console.log(err);
    postsData = "<h1>Failed posts</h1>";
  });

axios
  .get("https://jsonplaceholder.typicode.com/photos")
  .then((result) => {
    console.log(result);
    photosData = result.data;
  })
  .catch((err) => {
    photosData = "<h1>Failed photos</h1>";
  });

  /*GETS : send the information to the front about the Photos and Posts*/
  app.get("/posts", function (req, res, next) {
    res.send(postsData);
  });

  app.get('/posts/:postId', (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.post.post.id));
    res.json(post);
  });
  
  app.use("/photos", function (req, res, next) {
      res.send(photosData);
  });

