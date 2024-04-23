const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
