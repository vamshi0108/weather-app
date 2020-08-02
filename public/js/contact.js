const contactUsForm = document.querySelector(".contact-form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const MSISDN = document.querySelector(".MSISDN");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const contactError = document.querySelector(".contactError");

contactUsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameData = name.value;
  const emailData = email.value;
  const MSISDNData = MSISDN.value;
  const subjectData = subject.value;
  const messageData = message.value;
  fetch(
    "/contactUs?name=" +
      nameData +
      "&email=" +
      emailData +
      "&MSISDN=" +
      MSISDNData +
      "&subject=" +
      subjectData +
      "&message=" +
      messageData
  ).then((response) => {
    response.json().then((data) => {
      if (!data.error) {
        contactError.textContent = data.response;
      } else return (contactError.textContent = data.error);
    });
  });
});
