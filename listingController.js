angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(code, name, coordinates, address) {
      $scope.listings.entries.push({ code, name, coordinates, address });
    };
    $scope.deleteListing = function(index) {
      $scope.listings.entries.splice(index, 1);
    };
    $scope.showDetails = function(index) {};
  }
]);