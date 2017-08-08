'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/facade/' + 'index.html');
});
app.post('/signin', urlencodedParser, function(req, res) {
    var name = req.body.name;
    //var pwd = req.body.pwd;
    if (name == 'vicky') {
        var response = { name: name };

        //res.sendFile(__dirname + '/facade/' + 'profil.html');
        res.send(JSON.stringify(response));

    } else {
        res.send('failed admin');
    }

})
var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})