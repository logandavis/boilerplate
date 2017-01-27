/*jslint node: true */
'use strict';
var mongoose = require('mongoose');

// create a user schema
var userSchema = mongoose.Schema({
  name: String,
  hobbies: [String],
  isCool: Boolean
});

module.exports = mongoose.model("user", userSchema);