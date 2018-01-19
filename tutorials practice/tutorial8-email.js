var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adamcarter.noreply@gmail.com',
    pass: '#Humboldt'
  }
});

var mailOptions = {
  from: 'adamcarter.noreply@gmail.com',
  to: 'bravelemming@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});