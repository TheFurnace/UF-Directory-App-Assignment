angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.form = $scope.emptyForm;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(code, name, latitude, longitude, address) {
      $scope.listings.push({ code, name, coordinates: {latitude, longitude}, address });
      $scope.listings.sort((a,b) => { return a.code > b.code });
    };
    $scope.deleteListing = function(listing) {
      $scope.listings.forEach((entry, index) => {
        if(entry.code === listing.code) {
          $scope.listings.splice(index, 1);
        }
      });
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
    $scope.clear = function() {
      $scope.form = $scope.emptyForm; 
    }
  }
]);