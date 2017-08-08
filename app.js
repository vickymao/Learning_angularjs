'use strict'

var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('./facade/index.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log('app started at port 8080 ...');