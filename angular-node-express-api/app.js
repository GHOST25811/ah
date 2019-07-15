var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db=require('./modules/db');
var users = require('./routes/users');
const indexRouter = require('./router/msg');
const employeesRouter = require('./router/index');
const qbz=require('./modules/qu');
var cors = require('cors');
var app = express();


//app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/api/v1/users', users);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.urlencoded({ extended: false }));
app.use('/employees',employeesRouter );
app.use('/', indexRouter);
//app.use('/qq',employeesRouter);

module.exports = app;