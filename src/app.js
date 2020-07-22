const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const app = express();
const indexPublicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const port = process.env.PORT || 4242;
var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
var n = date.getDay();
date = date.toString().split(" ")[2] + " " + date.toString().split(" ")[1];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
app.set("views", viewsPath);
app.set("view engine", "hbs");

app.use(express.static(indexPublicPath));
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    day1: days[(n - 1) % 7],
    day2: days[n % 7],
    day3: days[(n + 1) % 7],
    day4: days[(n + 2) % 7],
    day5: days[(n + 3) % 7],
    day6: days[(n + 4) % 7],
    day7: days[(n + 5) % 7],
    date,
  });
});

app.get("/weather", (req, res) => {
  geocode(req.query.address, (error, { longitude, latitude, displayName } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (forecastError, { name, temperature } = {}) => {
      if (forecastError) {
        return res.send({ error2 });
      }
      return res.send({ name, temperature, displayName });
    });
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    name: "vamshi",
    title: "Help",
  });
});

app.get("/news", (req, res) => {
  res.render("news", {
    name: "vamshi",
    title: "Help",
  });
});

app.get("/photos", (req, res) => {
  res.render("photos", {
    name: "vamshi",
    title: "Help",
  });
});

app.listen(port, () => console.log("Server started"));
