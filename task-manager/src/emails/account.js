const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'arpit201299@gmail.com',
    from: 'arpit201299@gmail.com',
    subject: 'this is my first creation!',
    text: 'i hope this one actually get to you.'
})
