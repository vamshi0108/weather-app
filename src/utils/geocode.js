const request = require("request");

const geocode = (location, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1IjoidmFtc2hpMDEwOCIsImEiOiJja2NocGNyNXMxMTh6MnRwMHM4MGpjMzk5In0.vB4kFjd7bHcok0iRFP50Ww";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to Weather Services");
    } else if (body.features[0] == null) {
      callback("Unable to find the location, Invalid Input!");
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
