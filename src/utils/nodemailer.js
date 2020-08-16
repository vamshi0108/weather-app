const nodemailer = require("nodemailer");

const sendEmail = (data, callback) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "vamshitest9704@gmail.com",
      pass: "Vamshi@0108",
    },
  });

  var mailOptions = {
    from: "vamshitest9704@gmail.com",
    to: "vamshinagulapally2@gmail.com",
    subject: "Vays Contact | " + data.email + " | " + data.MSISDN,
    text: data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error.message);
    } else {
      callback(undefined, "Thanks for your valuable response");
    }
  });
};

module.exports = sendEmail;
