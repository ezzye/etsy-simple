/*jslint node: true */
"use strict";

var material = require('../controllers/material');

var etsyresults = [
                    { title: "test data 1",
                      description: "Easter eggs lasercut 1",
                      creation_tsz: 1456062745,
                      ending_tsz: 1466513545,
                      original_creation_tsz: 1426538032,
                      last_modified_tsz: 1456062745,
                      price: "14.00",
                      currency_code: "USD",
                      quantity: 1,
                      materials: [
                        "Lace",
                        "Pearls",
                        "Satin",
                        "Tulle",
                        "Organza",
                        "Brooch",
                        "Rhinestones"
                      ]
                    },
                    { title: "test data 2",
                      description: "Easter eggs lasercut 2",
                      creation_tsz: 2456062745,
                      ending_tsz: 2466513545,
                      original_creation_tsz: 2426538032,
                      last_modified_tsz: 2456062745,
                      price: "7.00",
                      currency_code: "USD",
                      quantity: 6,
                      materials: [
                        "Organza",
                        "Sugar",
                        "Candy"
                      ]
                    },
                    { title: "test data 3",
                      description: "Easter eggs lasercut 3",
                      creation_tsz: 3456062745,
                      ending_tsz: 3466513545,
                      original_creation_tsz: 3426538032,
                      last_modified_tsz: 3456062745,
                      price: "28.00",
                      currency_code: "USD",
                      quantity: 5,
                      materials: [
                        "Paper",
                        "Stone",
                        "Salt"
                      ]
                    },
                    { title: "test data 4",
                      description: "Easter eggs lasercut 4",
                      creation_tsz: 4456062745,
                      ending_tsz: 4466513545,
                      original_creation_tsz: 4426538032,
                      last_modified_tsz: 4456062745,
                      price: "12.00",
                      currency_code: "GBP",
                      quantity: 10,
                      materials: [
                        "Candy",
                        "Fish",
                        "Wood",
                        "Tulle",
                        "Organza"
                      ]
                    },
                  ];

describe('material', function() {

  describe('popular', function() {

    var popularMat = material.popMatListings(etsyresults,"materials").popMat;
    var popMatListing = material.popMatListings(etsyresults,"materials").popMatListing;

    it('should return the most popular material', function() {
      expect(popularMat).toEqual('Organza');
    });
    it('should return the listings with the most popular material', function() {
      expect(popMatListing).toEqual([
                    { title: "test data 1",
                      description: "Easter eggs lasercut 1",
                      creation_tsz: 1456062745,
                      ending_tsz: 1466513545,
                      original_creation_tsz: 1426538032,
                      last_modified_tsz: 1456062745,
                      price: "14.00",
                      currency_code: "USD",
                      quantity: 1,
                      materials: [
                        "Lace",
                        "Pearls",
                        "Satin",
                        "Tulle",
                        "Organza",
                        "Brooch",
                        "Rhinestones"
                      ]
                    },
                    { title: "test data 2",
                      description: "Easter eggs lasercut 2",
                      creation_tsz: 2456062745,
                      ending_tsz: 2466513545,
                      original_creation_tsz: 2426538032,
                      last_modified_tsz: 2456062745,
                      price: "7.00",
                      currency_code: "USD",
                      quantity: 6,
                      materials: [
                        "Organza",
                        "Sugar",
                        "Candy"
                      ]
                    },
                    { title: "test data 4",
                      description: "Easter eggs lasercut 4",
                      creation_tsz: 4456062745,
                      ending_tsz: 4466513545,
                      original_creation_tsz: 4426538032,
                      last_modified_tsz: 4456062745,
                      price: "12.00",
                      currency_code: "GBP",
                      quantity: 10,
                      materials: [
                        "Candy",
                        "Fish",
                        "Wood",
                        "Tulle",
                        "Organza"
                      ]
                    },
                  ]);
    });
  });
});
