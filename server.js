var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  var myRe = /\(([^)]+)\)/
  var software = myRe.exec(req.headers['user-agent']);
  var whouare = {
    ip: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"].split(',')[0],
    software: software[1]
  }
    res.send(whouare);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
