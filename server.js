var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

// using ejs to render html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/resources'));

// render index page
app.get("/", (req, res) => {
   res.render('./pages/index');
});

// var routes = require('./api/routes/allRoutes'); //importing route
// routes(app); //register the route

app.listen(port);

console.log('Yifan s blog is on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' is not found'})
});