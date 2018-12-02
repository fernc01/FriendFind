var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
 
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })



// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.urlencoded({ type: 'application/**json' , extended: false}))
app.use(bodyParser.raw({ type: 'application/**json' }))
app.use(bodyParser.text({ type: 'text/html' }))
 
// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});