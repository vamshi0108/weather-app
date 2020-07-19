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

app.set("views", viewsPath);
app.set("view engine", "hbs");

app.use(express.static(indexPublicPath));
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    name: "vamshi",
    title: "Weather",
  });
});

app.get("/weather", (req, res) => {
  geocode(req.query.address, (error, { longitude, latitude } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (forecastError, { name, temperature }) => {
      if (forecastError) {
        return res.send({ error2 });
      }
      return res.send({ name, temperature });
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "vamshi",
    title: "Help",
  });
});

app.listen(port, () => console.log("Server started"));
