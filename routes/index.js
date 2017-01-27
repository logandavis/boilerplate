/*jslint node: true */
'use strict';
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

module.exports.home = home;
module.exports.school = school;