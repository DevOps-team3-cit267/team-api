const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Browser");
});

app.get("/brent", (req, res) => {
  res.send("Hello Brent");
});

app.get("/mckay", (req, res) => {
  res.send("Hello McKay");
});

app.get('/Max', (req, res) => {
  res.send("Hello Max");
});

app.get('/Max', (req, res) => {
  res.send("Hello Alberto");
});

app.listen(port, () => console.log("Listening"));
