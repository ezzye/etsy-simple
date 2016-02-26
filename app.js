/*jslint node: true */
"use strict";

var express = require('express');

var app = express();

var etsyController = require('./controllers/etsyController');


app.get('/', etsyController.getEtsydata, etsyController.getAll);

app.get('/quantity', etsyController.getEtsydata, etsyController.getQuantityData);

app.get('/price', etsyController.getEtsydata, etsyController.getPriceData);

app.get('/material', etsyController.getEtsydata, etsyController.getMaterial);

app.get('/tags', etsyController.getEtsydata, etsyController.getTag);

app.get('/cats', etsyController.getEtsydata, etsyController.getCat);

app.listen(3000,function() {
  console.log("Gulp is running my app on port 3000");
});