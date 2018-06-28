var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
require('./app/Helpers/errorCode');
// -- Import router
const auth = require('./routes/auth');
const post = require('./routes/post');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routers

app.use('/api/v1/auth', auth);
app.use('/api/v1/posts', post);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next({
    error: 400,
    message: 'not_found'
  });
});

// error handler
app.use(function(err, req, res, next) {
  return res.json(err);
});

global.APP_KEY = "123";

const http = require('http').createServer(app);
http.listen(3005, function() {
  console.log('server start with port 3005');
});
module.exports = app;
