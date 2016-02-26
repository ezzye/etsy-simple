/*jslint node: true */
"use strict";

var quantity = require('../controllers/quantity');

var etsyresults = [
                    { title: "test data 1",
                      description: "Easter eggs lasercut 1",
                      creation_tsz: 1456062745,
                      ending_tsz: 1466513545,
                      original_creation_tsz: 1426538032,
                      last_modified_tsz: 1456062745,
                      price: "14.00",
                      currency_code: "USD",
                      quantity: 1
                    },
                    { title: "test data 2",
                      description: "Easter eggs lasercut 2",
                      creation_tsz: 2456062745,
                      ending_tsz: 2466513545,
                      original_creation_tsz: 2426538032,
                      last_modified_tsz: 2456062745,
                      price: "7.00",
                      currency_code: "USD",
                      quantity: 6
                    },
                    { title: "test data 3",
                      description: "Easter eggs lasercut 3",
                      creation_tsz: 3456062745,
                      ending_tsz: 3466513545,
                      original_creation_tsz: 3426538032,
                      last_modified_tsz: 3456062745,
                      price: "28.00",
                      currency_code: "USD",
                      quantity: 5
                    },
                    { title: "test data 4",
                      description: "Easter eggs lasercut 4",
                      creation_tsz: 4456062745,
                      ending_tsz: 4466513545,
                      original_creation_tsz: 4426538032,
                      last_modified_tsz: 4456062745,
                      price: "12.00",
                      currency_code: "GBP",
                      quantity: 10
                    },
                  ];

describe('quantity functions', function() {

  describe('average', function() {
    it('returns the average quantity', function() {
      expect(quantity.averageQuantity(etsyresults)).toEqual(22/4);
    });
  });

  describe('maximum', function() {
    it('returns the maximum quantity listing', function() {
      expect(quantity.maximumListing(etsyresults).title).toEqual('test data 4');
    });
  });

  describe('minimum', function() {
    it('returns the minimum quantity listing', function() {
      expect(quantity.minimumListing(etsyresults).title).toEqual('test data 1');
    });
  });

});