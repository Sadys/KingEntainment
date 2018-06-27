var http = require('http');
var favicon = require('serve-favicon')
var finalhandler = require('finalhandler')
var path = require('path')
var static = require('node-static');
var file = new static.Server('.');

var _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'))

var server = http.createServer(function onRequest (req, res) {
  var done = finalhandler(req, res)

  _favicon(req, res, function onNext (err) {
    if (err) return done(err)

    res.statusCode = 404
    res.end('oops')
  })
})

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(80);

console.log('Веб-сервер запущен и готов к использованию');
