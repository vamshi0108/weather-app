const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const output = document.querySelector("#output");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("location");
  output.textContent = "...";
  const location = search.value;
  console.log("location", location);
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (!data.error) return (output.textContent = data.temperature);
      else return (output.textContent = data.error);
    });
  });
});
