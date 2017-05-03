'use strict';
var User = require('../models/userModel.js');

var hello = function (req, res) {
  res.json({'h1Text': 'Hello, World!', 'pText': 'This is a boilerplate app.'});
};

var users = function (req, res) {
  User.find({}, function (err, allUsers) {
    if (err) {
      console.error(err);
    } else {
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].isCool === true) {
          allUsers[i].coolness = 'cool';
        } else {
          allUsers[i].coolness = 'not cool';
        }
      }
      res.status(200).json(allUsers);
    }
  });
};

module.exports.hello = hello;
module.exports.users = users;
