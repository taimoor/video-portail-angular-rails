'use strict';

// Declare app level module which depends on views, and components
angular.module('vedioCatalog', [
  'ngRoute',
  'listing',
  'templates',
  //'fileUpload',
  //'myApp.view2',
  'myApp.version',
  'ngResource'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/listing', {
        //templateUrl: '../../../../../app/views/videos/listing.html',
        templateUrl: 'listing_view.html',
        controller: 'ListingCtrl'
    }).
        otherwise({redirectTo: '/listing'});
}]);
