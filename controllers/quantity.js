/*jslint node: true */
"use strict";

exports.averageQuantity = function(JsonArray) {
  var tot = 0;
  var average;
  var arraylength = JsonArray.length;

  JsonArray.forEach(function(item){
    tot += item.quantity;
  });
    average = tot / arraylength;
    return average;
};

exports.maximumListing = function(JsonArray) {
  JsonArray.sort(function(a,b) {
    return b.quantity - a.quantity;
  });
  return JsonArray[0];
};

exports.minimumListing = function(JsonArray) {
  JsonArray.sort(function(a,b) {
    return a.quantity - b.quantity;
  });
  return JsonArray[0];
};