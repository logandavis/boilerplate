/*jslint node: true */
'use strict';
var User = require('../models/userModel.js');

var home = function(req, res){
  res.send('home');
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

module.exports.home = home;
module.exports.users = users;