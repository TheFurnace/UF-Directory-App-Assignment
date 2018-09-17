/* Fill out these functions using Mongoose queries*/
var mongoose = require("mongoose"),
  Listing = require("./ListingSchema.js"),
  config = require("./config");

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ code: "LBW" })
    .exec()
    .then(result => {
      console.log(result);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code: "CABL" })
    .exec()
    .then(result => {
      console.log(result);
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate(
    { code: "PHL" },
    { $set: { address: "BMS, 3rd floor: J351" } }
  )
    .exec()
    .then(result => {
      console.log(result);
    });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({})
    .exec()
    .then(result => {
      console.log(result);
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
