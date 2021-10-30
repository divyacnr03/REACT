var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controller/index');
var usersRouter = require('./controller/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log(" --- first next")
  next();
})


app.use(function(req, res, next) {
  console.log(" --- second next")
  next();
})


app.use(function(req, res, next) {
  console.log(" --- third next")
  next();
})

app.use('/', indexRouter);


app.use(function(req, res, next) {
  console.log(" --- last next")
  next();
})

app.use('/users', usersRouter);


app.use(function(err,req, res, next) {
  // Here logic to handle the server error like writing to file, emailing the concerned team will come here
 console.log(err)
 next()


})

app.use(function(err,req, res, next) {
 
  res.status(err.statusCode || 500)
  res.json ({ errmessage : err.message || "Some error occured"})


})




module.exports = app;
