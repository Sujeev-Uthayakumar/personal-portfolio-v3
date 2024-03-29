const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT);
