var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

// Make transporter
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'contact.chevillion@gmail.com',
        pass: 'contactme'
    }
});

// let mailOptions = {
// from: 'el.chevillion@gmail.com',
// to:'contact.chevillion@gmail.com',
// subject: "getting this to work",
// text: "yay it works"
// };

router.post('/', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: name,
      to: 'contact.chevillion@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

// transporter.sendMail(mailOptions, function(err,data){
//     if (err) {
//         console.log('Error occured')
//     } else {
//         console.log('Message sent')
//     }
// });