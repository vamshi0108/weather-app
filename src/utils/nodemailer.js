const nodemailer = require("nodemailer");

const sendEmail = (data, callback) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vmshpandu@gmail.com",
      pass: "9705530295",
    },
  });

  var mailOptions = {
    from: "vmshpandu@gmail.com",
    to: "vamshinagulapally2@gmail.com",
    subject: "Vays Contact | " + data.email + " | " + data.MSISDN,
    text: data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback(undefined, "Thanks for your valuable response");
    }
  });
};

module.exports = sendEmail;
