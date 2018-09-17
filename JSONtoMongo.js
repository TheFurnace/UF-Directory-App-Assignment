"use strict";
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require("fs"),
  mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  Listing = require("./ListingSchema.js"),
  config = require("./config"),
  listingArr = require("./listings.json");

console.log;
/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
*/
listingArr.entries.forEach(listing => {
  new Listing(listing).save((err, listing) => {
    if (err) {
      console.log("Error in (" + listing.code + "): " + err);
    } else {
      console.log("Success in (" + listing.code + ")  ");
    }
  });
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
*/
