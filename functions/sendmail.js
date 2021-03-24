const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
         user: "nirargil5@gmail.com",
         pass: "nir12345",
        //  user:[YOUR SMTP SERVER USERNAME],
        //  pass: [YOUR SMTP SERVER PASSWORD]
    }
    });

    transporter.sendMail({
        from: "send@example.com",
        to: "nirargil5@gmail.com",
        subject: `Contact Form`,
        html: `
            <h3>Email from ${data.name}, <br>
            Email: ${data.email}<h3>.
            Phone num: ${data.phone} <br>
            Message:
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