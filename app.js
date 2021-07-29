var express = require('express');
var fs= require('fs');
var path=require('path');
app = express();

var route = require('./app_server/routes/RouteSite');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/',route);

app.listen(8080);