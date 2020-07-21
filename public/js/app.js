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
      if (!data.error)
        return (
          (output.textContent = data.temperature),
          (locationName.textContent =
            data.displayName.split(",")[0] + ", " + data.displayName.split(",")[1])
        );
      else return (locationName.textContent = data.error);
    });
  });
});
