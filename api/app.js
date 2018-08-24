const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json())

module.exports = {
    path: '/api',
    handler: app
}
app.post('/contact', (req, res)=> {
    console.log(req.body);
    const output = `
        <h1>You have a new message from dontetrumble.com</h1>
        <h2>Contact Details</h2>
        <ul>
            <li>First Name: ${req.body.firstName}</li>
            <li>Last Name: ${req.body.lastName}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone Number: ${req.body.phoneNumber}</li>
            <li>Company: ${req.body.company}</li>
        </ul>
        <h2>Message</h2>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'mail.futurehits3.com',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'donte@futurehits3.com', // generated ethereal user
            pass: 'CDJ_Donte_03' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <test@futurehits3.com>', // sender address
        to: 'dt.trumble@gmail.com', // list of receivers
        subject: 'Node contact request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    res.status(200).json({ 'message': 'OH YEAH' });
})

