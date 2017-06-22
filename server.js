var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
    
app.use(express.static( path.join( __dirname, './client' )));
app.use(express.static( path.join( __dirname, './bower_components')));

app.use(bodyParser.json());

//database
require('./server/config/schema');

//routes
var router = require('./server/config/routes');
router(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})