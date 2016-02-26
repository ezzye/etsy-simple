/*jslint node: true */
"use strict";

var frisby = require('frisby');

frisby.create('get listings')
.get('http://localhost:3000/')
.expectStatus(200)
.expectBodyContains('quantity')
.toss();


frisby.create('get quantity')
.get('http://localhost:3000/quantity')
.expectStatus(200)
.expectBodyContains('average')
.expectBodyContains('maximum')
.expectBodyContains('minimum')
.expectBodyContains('maxqty')
.expectBodyContains('minqty')
.toss();

frisby.create('get price')
.get('http://localhost:3000/price')
.expectStatus(200)
.expectBodyContains('average')
.expectBodyContains('maximum')
.expectBodyContains('minimum')
.expectBodyContains('maxprice')
.expectBodyContains('minprice')
.toss();

frisby.create('get material')
.get('http://localhost:3000/material')
.expectStatus(200)
.expectBodyContains('popMat')
.expectBodyContains('popMatListing')
.toss();