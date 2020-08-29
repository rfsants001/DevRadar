"use strict";

var mongoose = require('mongoose');

var PointSchema = new mongoose.Schema({
  type: {
    type: String,
    "enum": ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});
module.exports = PointSchema;