/*jslint node: true */
"use strict";

var sortable = [];

function matfrequency(ary,prop) {
  var matfreq = {};
  ary.forEach(function(item) {
    item[prop].forEach(function(mat) {
      if(matfreq.hasOwnProperty(mat)) {
        matfreq[mat] ++;
      } else {
        matfreq[mat] = 1;
      }
    });
  });
  return matfreq;
}


function popular(ary,prop) {
  var obj = matfrequency(ary,prop);
  for (var item in obj) {
    var tempobj = {};
    tempobj[prop] = item;
    tempobj["freq"] = obj[item];
    sortable.push(tempobj);
  }
  sortable.sort(function(a,b) {
    return b.freq - a.freq;
  });
  return sortable[0][prop];
}

exports.popMatListings = function(ary,prop) {
  var matObj = {};
  matObj.popMat = popular(ary,prop);
  var popMatListing = [];
  ary.forEach(function(item) {
    if(item[prop].indexOf(matObj.popMat) >= 0) {
      popMatListing.push(item);
    }
  });
  matObj.popMatListing = popMatListing;
  return matObj;
};

exports.popItems = function(ary,prop) {
  sortable = [];
  popular(ary,prop);
  return sortable;
};