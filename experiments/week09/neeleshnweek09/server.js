var express = require('express');
var app = express();

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/test' || 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/');

var Cat = mongoose.model('Cat', { name: String });

app.get('/find', function (req, res) {
    var kitty = new Cat({ name: 'FromDB' });
    kitty.save(function (err) {
        if (err)
            console.log('meow');
        else console.log("Saved FromDB");
    });

    Cat.find(function (err, response) {
        console.log("in function");
        console.log(response);
        res.send(response);
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/ex1', function (req, res) {
    res.sendfile('public/ex1.html');
});

app.get('/ex2', function (req, res) {
    res.sendfile('public/ex2.html');
});

app.get('/ex3', function (req, res) {
    res.sendfile('public/ex3.html');
});

app.get('/ex4', function (req, res) {
    res.sendfile('public/ex4.html');
});

app.get('/ex5', function (req, res) {
    res.sendfile('public/ex5.html');
});

app.get('/ex6', function (req, res) {
    res.sendfile('public/ex6.html');
    console.log("in ex6");
});

app.get('/ex7', function (req, res) {
    res.sendfile('public/ex7.html');
    console.log("in ex6");
});

app.get('/ex8', function (req, res) {
    res.sendfile('public/ex8.html');
    console.log("in ex6");
});

app.get('/ex9', function (req, res) {
    res.sendfile('public/ex9.html');
    console.log("in ex6");
});

app.listen(port, ip);