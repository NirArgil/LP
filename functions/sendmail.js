const nodemailer = require('nodemailer');

// const USER_NAME = process.env.REACT_APP_USER_NAME;
// const PASSWORD = process.env.REACT_APP_PASSWORD;
// const HOST = process.env.REACT_APP_HOST;

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        // host: `${HOST}`,
        service: "Gmail",
        port: 465,
        secure: true,
        auth:{
            type: "OAuth2",
            user: process.env.REACT_APP_USER_NAME,
            pass: process.env.REACT_APP_PASSWORD,       
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    }
    });

    var mailList = [
        process.env.REACT_APP_USER_NAME,
        'ben.elm@gmail.com',
        'nissim168@gmail.com',
        'vital23@netvision.net.il'
    ];

    transporter.sendMail({
        from: "send@example.com",
        to: mailList,
        subject: `New message from Casa de Vital website`,
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