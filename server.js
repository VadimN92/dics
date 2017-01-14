var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routers/index');

var app = express();
var port = 8080 || process.env.PORT;

//View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(port, function() {
  console.log('Server run on http://localhost:'+port);
  console.log(__dirname);
});