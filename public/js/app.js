const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const output = document.querySelector("#output");
const locationName = document.querySelector("#locationName");

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
        return (
          (output.textContent = data.temperature.toString().concat("°C")),
          (locationName.textContent = outputName)
        );
      } else return (locationName.textContent = data.error);
    });
  });
});
