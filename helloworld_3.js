var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function (req, res) {
  res.json({success: true});
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.set('views', './views');

app.use('/',router);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});