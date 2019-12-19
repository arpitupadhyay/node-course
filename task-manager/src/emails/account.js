const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'arpit201299@gmail.com',
    from: 'arpitupadhyay2099@gmail.com',
    subject: 'this is my first creation!',
    text: 'i hope this one actually get to you.'
}).catch( err => {
    console.log(err)
})
