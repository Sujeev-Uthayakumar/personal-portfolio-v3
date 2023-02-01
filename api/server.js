const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT);
