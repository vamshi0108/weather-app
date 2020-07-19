const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const output = document.querySelector("#output");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = "loading..";
  const location = search.value;
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (!data.error)
        return (output.textContent = "Temperature in " + data.name + " is " + data.temperature);
      else return (output.textContent = data.error);
    });
  });
});
