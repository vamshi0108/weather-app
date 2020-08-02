const weatherForm = document.querySelector("#form");
const search = document.querySelector("input");
const output = document.querySelector("#output");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const output4 = document.querySelector("#output4");
const output5 = document.querySelector("#output5");
const output6 = document.querySelector("#output6");
const base1 = document.querySelector("#base1");
const base2 = document.querySelector("#base2");
const base3 = document.querySelector("#base3");
const base4 = document.querySelector("#base4");
const base5 = document.querySelector("#base5");
const base6 = document.querySelector("#base6");
const locationName = document.querySelector("#locationName");
const windSpeed = document.querySelector("span.windSpeed");
const compassDirection = document.querySelector("span.compassDirection");
const precipitation = document.querySelector("span.precipitation");
const forecastIcon = document.querySelector(".forecastIcon");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = "...";
  const location = search.value;
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (!data.error) {
        if (data.displayName.split(",")[1]) {
          var outputName = data.displayName.split(",")[0] + ", " + data.displayName.split(",")[1];
        } else {
          outputName = data.displayName.split(",")[0];
        }
        if (data.temperature > 27) var forecastSrc = "/images/icons/icon-3.svg";
        else if (data.temperature < 20) forecastSrc = "/images/icons/icon-14.svg";
        else forecastSrc = "/images/icons/icon-13.svg";
        return (
          (output.textContent = data.temperature.toString().concat("°C")),
          (locationName.textContent = outputName),
          (windSpeed.textContent = data.windSpeed.toString().concat("km/h")),
          (compassDirection.textContent = data.compassDirection),
          (precipitation.textContent = data.precipitation.toString().concat("%")),
          (forecastIcon.src = forecastSrc),
          (output1.textContent = (data.temperature + 2).toString().concat("°C")),
          (output2.textContent = (data.temperature + 1).toString().concat("°C")),
          (output3.textContent = data.temperature.toString().concat("°C")),
          (output4.textContent = (data.temperature - 1).toString().concat("°C")),
          (output5.textContent = data.temperature.toString().concat("°C")),
          (output6.textContent = (data.temperature - 2).toString().concat("°C")),
          (base1.textContent = (data.temperature - 2).toString().concat("°C")),
          (base2.textContent = (data.temperature - 4).toString().concat("°C")),
          (base3.textContent = (data.temperature - 4).toString().concat("°C")),
          (base4.textContent = (data.temperature - 5).toString().concat("°C")),
          (base5.textContent = (data.temperature - 3).toString().concat("°C")),
          (base6.textContent = (data.temperature - 4).toString().concat("°C"))
        );
      } else return (locationName.textContent = data.error);
    });
  });
});
