const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const app = express()
const transporter = require('./config');

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
  const mailOptions = {
    from: req.body.email,
    to: process.env.email,
    subject: "⚠ New message from website form",
    html: `<h1>New Message from ${req.body.firstName} ${req.body.lastName}</h1>
           <h4>${req.body.message}</h4>
           <a href="mailto:${req.body.emailAddress}">reply to: ${req.body.emailAddress}</a>`
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    } else {
      res.send({
        success: true,
        message: 'Thanks for contacting us. We will get back to you shortly'
      });
    }
  });
} catch (error) {
  res.status(500).send({
    success: false,
    message: 'Something went wrong. Try again later'
  });
}
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
})