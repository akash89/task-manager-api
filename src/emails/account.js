const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akashchandra023@gmail.com',
        subject: 'Thanks for joining !',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const cancelUserEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'akashchandra023@gmail.com',
        subject: 'Account Cancellation',
        text: `We are sorry to see you leave ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelUserEmail
}