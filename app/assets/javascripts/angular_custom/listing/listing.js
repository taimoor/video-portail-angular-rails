'use strict';

angular.module('listing', ['ngRoute', 'listingServices'])



.controller('ListingCtrl', ['$scope', 'GetListing', function($scope, GetListing) {

      $scope.movie_listing = GetListing.query();

}]);