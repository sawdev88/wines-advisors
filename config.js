const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  host: 'mail.winesadvisors.com',
  pool: true,
  port: 465,
  secure: true,
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.password // your gmail account password
  },
  tls: { rejectUnauthorized: false }
});

module.exports = transporter;
