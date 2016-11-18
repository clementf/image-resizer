var express = require('express');
var app = express();
var conf = require('./conf');

app.get('/resize/*', function(req, res) {
  var groups = req.params[0].match(/([\d-]+)x([\d-]+)\/(.*)/);
  var width = groups[1];
  var height = groups[2];
  var path = groups[3];
  var gm = require('gm').subClass({
    imageMagick: true
  });

  // handle case where url are terminated by a /
  if (path.charAt(path.length - 1) == '/') {
    path = path.substring(0, path.length - 1);
  }
  gm(conf.basePath + path)
    .resize(width, height)
    .toBuffer('jpg', function(err, buffer) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }

      res.writeHead(200, {
        'Content-Length': buffer.length,
        'Content-Type': 'image/jpeg',
      });

      res.end(buffer);
    });
});

app.listen(conf.port, function() {
  console.log('Listening on port ' + conf.port);
});
