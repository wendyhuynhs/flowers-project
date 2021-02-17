const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/getPosts", async (req, res) => {
  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );

    res.status(200).send(response.data);
  } catch (e) {
    res.status(404).send("Error retrieving data");
  }
});

module.exports = router;
