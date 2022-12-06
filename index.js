var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const port = process.env.port || 8000;
app.use(express.static("public"))
app.set("views","./views")
app.set("view engine", "ejs");

app.use('/css',express.static(path.join(__dirname, "public/css")));
app.use('/js',express.static(path.join(__dirname, "public/js")));
app.use('/images',express.static(path.join(__dirname, "public/images")));
mongoose.connect('mongodb://localhost:27017/LoginUser', {
useNewUrlParser: true,
useUnifiedTopology: true
}, (err) => {
if (!err) {
    console.log('MongoDB Connection Succeeded.');
} else {
    console.log('Error in DB connection : ' + err);
}
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/aboutus", (req, res) => {
    res.render("aboutus"); // tour refers to tour.ejs
});
app.get("/associates", (req, res) => {
    res.render("associates"); // service refers to service.ejs
});
app.get("/feedback", (req, res) => {
    res.render("feedback"); // index refers to contactus.ejs
});
app.get("/gallery", (req, res) => {
  res.render("gallery"); // index refers to contactus.ejs
});
app.get("/log", (req, res) => {
    res.render("log"); // index refers to contactus.ejs
  });
  app.get("/suggestion", (req, res) => {
    res.render("suggestion"); // index refers to contactus.ejs
  });
  app.get("/index2", (req, res) => {
    res.render("index2"); // index refers to contactus.ejs
  });
  app.get("/index", (req, res) => {
    res.render("index"); // index refers to contactus.ejs
  });  

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
    mongooseConnection: db
    })
}));


var server = require('./routes/server');
app.use("/", server);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Server is listening on:'+PORT);
});