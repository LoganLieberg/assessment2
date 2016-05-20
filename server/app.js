var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var animals = require('./routes/animals.js');
//var random = require('./routes/random.js');


app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/animals', animals);

app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
