const mailgun = require("mailgun-js")

const DOMAIN = 'sandboxfec8cc86791745e1b7905f8da7c00709.mailgun.org'
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN })
// const data = {
//     from: 'Excited User <smailgun@Abhinav>',
//     to: 'tejach53@gmail.com',
//     subject: 'babbu',
//     text: 'jus testing'
// }
// mg.messages().send(data, (error, body) => {
//     console.log(body)
// })

const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        from: 'Excited User <smailgun@Abhinav>',
        to: email,
        subject: 'Welcome ' + name + "....",
        text: 'jus testing'
    }, (error, body) => {
        console.log(body)
    })
}

const sendCancelEmail = (email, name) => {
    mg.messages().send({
        from: 'Excited User <smailgun@Abhinav>',
        to: email,
        subject: 'SORRY to say Bye ' + name + "....",
        text: 'Hope, we will meet you Again......'
    }, (error, body) => {
        console.log(body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}