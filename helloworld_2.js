var express = require('express');
var app = express();
var router = express.Router();

router.get('/uri/uno', function (req, res) {
  res.send('Aqui estoy!');
});

app.use('/api/v1',router);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});