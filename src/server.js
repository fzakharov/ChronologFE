var history = require('connect-history-api-fallback');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
var servePath = path.join(__dirname, '../dist')
console.log('serve path: ' + servePath);

var staticFileMiddleware = serveStatic(servePath);
app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(servePath, 'index.html'))
})

//app.use("/callback", express.static("dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
