var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/','/our-vision','/contactus'], function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

module.exports = router;
