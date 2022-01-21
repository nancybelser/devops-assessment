const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/healthcheck', function(req, res) {
  res.send('server online');
});

app.listen(3000);