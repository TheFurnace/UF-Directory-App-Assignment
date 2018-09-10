angular.module("listings").controller("ListingsController", [
  "$scope",
  "Listings",
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.form = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(listing) {
      $scope.listings.push(listing);
      $scope.listings.sort((a, b) => {
        return a.code > b.code;
      });
    };
    $scope.deleteListing = function(listing) {
      var index = findListing(listing);
      if (index >= 0) {
        $scope.listings.splice(index, 1);
      }
      console.log("Error: failed to find listing in 'deleteListing() index = " + index)
    };
    $scope.showDetails = function(listing) {
      var index = findListing(listing);
      if (index >= 0) {
        $scope.detailedInfo = listing;
        return;
      }
      console.log("Error: failed to find listing in 'showDetails() index = " + index)
    };
    $scope.clear = function() {
      $scope.form = $scope.emptyForm;
    };

    var findListing = function(listing) {
      var index = -1;
      $scope.listings.some((entry, i) => {
        if (entry.code === listing.code) {
          index = i;
          return true;
        }
      });
      return index;
    };
  }
]);
