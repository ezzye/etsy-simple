/*jslint node: true */
"use strict";

var currencyLookup = {
                        "USD": 0.67,
                        "EUR": 0.60,
                        "GBP": 1,
                        "INR": .05,
                        "AUD": 0.20,
                        "CAD": 0.40
                      };

function currencyMultiplier(currency) {
  var result = 1;
  if (currencyLookup.hasOwnProperty(currency) ) {
    result = currencyLookup[currency];
  }
  return result;
}

function sortArrayByPriceLowestToHighest(ary) {
  ary.sort(function (a,b) {
    return a.price * currencyMultiplier(a.currency) - b.price * currencyMultiplier(b.currency);
  });
  return ary[0];
}

exports.getAveragePrice = function(json){
  var total = 0;
  for(var i = 0; i < json.results.length; i++){
    total += json.results[i].price * currencyMultiplier(json.results[i].currency);
  }
  return total/json.results.length;
};

exports.getHighestPricedListing = function(json){
  sortArrayByPriceLowestToHighest(json.results);
  return json.results[json.results.length-1];
};

exports.getLowestPricedListing = function(json){
  sortArrayByPriceLowestToHighest(json.results);
  return json.results[0];
};

