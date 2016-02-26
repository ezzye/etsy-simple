# etsy-api simple

####A research tool based on data from Etsy, keeping it simple using BDD(frisby) and TDD(jasmine-node)

Etsy (for anyone not familiar) is a peer-to-peer marketplace for vintage and handmade goods.

The objective is to build a collection of JSON endpoints that output useful summary data about Etsy's latest listings (available at https://openapi.etsy.com/v2/listings/active).

####The endpoints are:

GET /price - average price of the latest listings, highest price (with the listing), lowest price (with the listing)
GET /quantity - average quantity of per item, highest quantity (with the listing), lowest quantity (with the listing)
GET /materials - top 5 most common materials, and all the listings that contain them
GET /tags - top 5 most common tags, and all the listings that contain them
GET /categories - all category paths, by frequency
GET / - route containing all the above information

####Todo:

- by default, the API returns only 25 listings per query. Extend the above to the 100 recent items, passing the limit as a query string parameter
- create the route POST /report, which takes a query string parameter and e-mails the aggregated JSON from GET / to the email specified

####To run:

>> `npm install`
>> `gulp`

####To run tests:

>> `jasmine-node spec`

####Approach

Use Express starting as a single file, writing tests, passing test, then refactoring into more files using modules to follow best practice, MVC structure, ensuring each class has one responsibility and is encapsulated.

Use gulp to rerun server after each code change.



