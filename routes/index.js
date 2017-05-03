/*jslint node: true */
'use strict';
var User = require('../models/userModel.js');

var hello = function(req, res) {
  res.json({'h1Text': 'Hello, World!', 'pText': 'This is a boilerplate app.'});
};

var users = function(req, res){
  User.find({}, function(err, users){
    for (var i=0; i<users.length; i++) {
      if (users[i].isCool === true) {
        users[i].coolness = "cool";
      } else {
        users[i].coolness = "not cool";
      }
    }
    res.status(200).json(users);
  });
};

module.exports.hello = hello;
module.exports.users = users;
