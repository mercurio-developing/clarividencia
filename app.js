// server.js

// modules =================================================
var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var path = require('path')
var forceSsl = require('force-ssl-heroku');
var cors = require('cors')

var app = express();
app.use(forceSsl);
app.use(cors())


// configuration ===========================================
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "clarividenciafotografia@gmail.com        ",
        pass: "yuraqrumi"
    },tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
// config files

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/dist'));

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.post('/sendmail', function (req, res) {
    
    console.log(req.body)
    
    var mailOptions = {
        from: req.body.email, 
        subject: 'CLARIVIDENCIA contact', 
        html: '<h1>CLARIVIDENCIA CONTACT</h1></br><div><p><b>MESSAGE:</br></b>'+req.body.message+' </div><div><b>Nombre de cliente:</b> '+req.body.name +'</p></div><div><p><b>Email:</b> '+req.body.email +'</p></div>', // html body
        to: 'clarividenciafotografia@gmail.com'
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            emailMessage = "there was an error :-(, and it was this: " + error.message;
        } else {
            emailMessage = "Message sent: " + info.response;
        }
        return res.json({
            message: "success",
            email: emailMessage
        });
    });
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
    console.log("Express Started on Port 3000");
});


