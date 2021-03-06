var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var offerRouter = require('./routes/offer');
var achieveRouter = require('./routes/achieve');
var corporateRouter = require('./routes/corporate');
var experienceRouter = require('./routes/experience');
var sectorRouter = require('./routes/sector');
var titulationRouter = require('./routes/titulation');
var authorization = require('./middlewares/authorization');


var app = express();
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use("./public", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRouter)
app.use('/user', userRouter);
app.use('/offer',authorization, offerRouter);
app.use('/achieve', achieveRouter);
app.use('/corporate', corporateRouter);
app.use('/experience', experienceRouter);
app.use('/sector', sectorRouter);
app.use('/titulation', titulationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
