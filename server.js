var express = require('express');
var app = express();
app.use(express.static('assets'));

app.use('/store', function(req, res, next) {
    console.log('The Store\'s Middleman here.. carry on..');
    next();
});

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.get('/userform', function(req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.get('/store', function(req, res) {
    res.send('Welcome to the shop!');
});

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example of listening ' + host + ':' + port);
    
})