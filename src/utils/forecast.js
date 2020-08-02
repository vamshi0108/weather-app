const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=b788846d23ac76444d493b2391366784&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather Services");
    } else if (body.location == null) {
      callback("Invalid input! Unable to find the location");
    } else {
      callback(undefined, {
        name: body.location.name,
        temperature: body.current.temperature,
        windSpeed: body.current.wind_speed,
        compassDirection: body.current.wind_dir,
        precipitation: body.current.precip,
      });
    }
  });
};

module.exports = forecast;
