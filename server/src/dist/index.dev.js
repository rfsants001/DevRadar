"use strict";

var express = require('express');

var mongoose = require('mongoose');

var routes = require('./routes');

var app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.yszgf.mongodb.net/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
app.use(express.json());
app.use(routes);
app.listen(3333);