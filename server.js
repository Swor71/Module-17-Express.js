var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/static', express.static('assets'));

app.get('/auth/google', function(req, res) {
    res.render('login');
});

app.get('/main', function(req, res) {
    res.render('main');
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry Buddy, cannot get you that.');
});

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening ' + host + ':' + port);
})