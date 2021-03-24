const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: HOST,
        port: 465,
        auth:{
         user: process.env.USERNAME,
         pass: process.env.PASSWORD,
        //  user:[YOUR SMTP SERVER USERNAME],
        //  pass: [YOUR SMTP SERVER PASSWORD]
    }
    });

    transporter.sendMail({
        from: "send@example.com",
        to: "nirargil5@gmail.com",
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}