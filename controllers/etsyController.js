/*jslint node: true */
"use strict";

var quantity = require('./quantity');

var priceCalc = require('./price');

var materialCalc = require('./material');

var request = require('request');

var etsyData;

exports.getEtsydata = function(req,res,next) {
  request('https://openapi.etsy.com/v2/listings/active?api_key=96kg7j4073g5j4nc9tk5usgw', function(error, res, body) {
    if (!error && res.statusCode === 200) {
      etsyData = JSON.parse(body);
      next();
    } else {
      console.log(error);
    }
  });
};

exports.getQuantityData = function(req,res) {
  var listings = etsyData;
  var average = quantity.averageQuantity(listings.results);
  var maximum = quantity.maximumListing(listings.results);
  var minimum = quantity.minimumListing(listings.results);
  var qtyobj = {};
  qtyobj.average = average;
  qtyobj.maxqty = maximum.quantity;
  qtyobj.maximum = maximum;
  qtyobj.minqty = minimum.quantity;
  qtyobj.minimum = minimum;
  res.json(qtyobj);
  res.end();
};


exports.getPriceData = function(req,res){
  var listings = etsyData;
  var returnObject = {}
  returnObject.average = priceCalc.getAveragePrice(listings);
  returnObject.maxprice = priceCalc.getHighestPricedListing(listings).price;
  returnObject.maximum = priceCalc.getHighestPricedListing(listings);
  returnObject.minprice = priceCalc.getLowestPricedListing(listings).price;
  returnObject.minimum = priceCalc.getLowestPricedListing(listings);
  res.json(returnObject);
  res.end();
};

exports.getMaterial = function(req,res) {
  var listings = etsyData;
  res.json(materialCalc.popMatListings(listings.results,"materials"));
  res.end();
};

exports.getTag = function(req,res) {
  var listings = etsyData;
  res.json(materialCalc.popMatListings(listings.results,"tags"));
  res.end();
};


exports.getCat = function(req,res) {
  var listings = etsyData;
  res.json(materialCalc.popItems(listings.results,"category_path"));
  res.end();
};

exports.getAll = function(req,res) {
  var allObj = {};
  var listings = etsyData;
  allObj.avgPrice = priceCalc.getAveragePrice(listings);
  allObj.maxPrice = priceCalc.getHighestPricedListing(listings).price;
  allObj.minPrice = priceCalc.getLowestPricedListing(listings).price;
  allObj.maxListPrice = priceCalc.getHighestPricedListing(listings);
  allObj.minListPrice = priceCalc.getLowestPricedListing(listings);
  allObj.avgQuantity = quantity.averageQuantity(listings.results);
  allObj.maxListQuantity = quantity.maximumListing(listings.results);
  allObj.minListQuantity = quantity.minimumListing(listings.results);
  allObj.maxQuantity = quantity.maximumListing(listings.results).quantity;
  allObj.minQuantity = quantity.minimumListing(listings.results).quantity;
  allObj.popularMaterials = materialCalc.popMatListings(listings.results,"materials");
  allObj.popularTags = materialCalc.popMatListings(listings.results,"tags");
  allObj.popularCats = materialCalc.popItems(listings.results,"category_path");
  res.json(allObj);
  res.end();
};