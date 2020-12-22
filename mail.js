const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "7f3ed69a9ce6eecf3831a6f47e34a243-b6190e87-d85aca7b",
    domain: "sandbox4044866eca0b46d9b80c95f449e77bab.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "alexestrozensky@gmail.com",
    subject: "Portfolio message",
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
