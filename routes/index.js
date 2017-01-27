/*jslint node: true */
'use strict';
var User = require('../models/userModel.js');

var home = function(req, res){
  res.render("home");
};

var school = function(req, res){
  res.render("olin", {"classes": [
    {name:"Olin.js", teacher:"Bill Wong and Cynthia Chen"},
    {name:"Tell the Story of What You Make", teacher:"Tim Sauder"},
    {name:"Six Books that Changed the World", teacher:"Rob Martello"},
    {name:"Entrepreneurship Capstone", teacher:"Lawrence Neeley"},
    {name:"Senior Capstone Program in Engineering", teacher:"Alexandra Coso Strong"}
    ]
  });
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
    res.render("users", {"users": users});
  });
};

module.exports.home = home;
module.exports.users = users;
module.exports.school = school;