var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
var servePath = path.join(__dirname, '../dist')
console.log('serve path: ' + servePath);
app.use(serveStatic(servePath));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
