// const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'
// sgMail.setApiKey(sendgridAPIKey)
// sgMail.send({
//     to: 'arpit201299@gmail.com',
//     from: 'arpit201299@gmail.com',
//     subject: 'this is my first creation!',
//     text: 'i hope this one actually get to you.'
// })


    const nodemailer = require('nodemailer')
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arpitupadhyay2099@gmail.com',
        pass: 'Arpit@0120..?'
    }
 });

  // send mail with defined transport object
//   let mailOptions = {
//       from: 'arpitupadhyay2099@gmail.com',
//       to: 'arpit201299@gmail.com, arpitupadhyay2099@gmail.com',
//       cc: 'arpitupadhyay2099@gmail.com',
//       subject: 'testing and testing',
//       text: 'is it really working?'
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//           console.log('Error Occurs', err);
//       } else {
//           console.log('email sent!!!');
//       }
//   });

  const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        from: 'arpitupadhyay2099@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    },function (err, data) {
              if (err) {
                  console.log('Error Occurs', err);
              } else {
                  console.log('email sent!!!');
              }
          });

  }

  module.exports = {
      sendWelcomeEmail
  }