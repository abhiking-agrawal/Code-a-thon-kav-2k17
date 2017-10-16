var express = require('express');
var router = express.Router();
var api_key = 'key-58373f910b52cb87142f833f3b646658';
var domain = 'sandbox2f6c24e87b0f4ad6aa021d50908cd8cb.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 


/* GET home page. */
router.get(['/','/our-vision','/contactus','/learning-paths'], function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.post('/contactUs',function(req,res){
  var data = {
    from: 'Excited User <abhijitagrawal09@gmail.com>',
    to: req.body.email,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    res.send({status:400 , message:"Thanks for contacting us"});
  });
  
})
module.exports = router;
