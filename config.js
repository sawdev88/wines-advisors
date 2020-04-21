const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.password // your gmail account password
  },
  tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

module.exports = transporter;
