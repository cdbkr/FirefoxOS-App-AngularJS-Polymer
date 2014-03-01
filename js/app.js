'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/main', {templateUrl: 'partials/mainview.html', controller: 'MainController'});
	$routeProvider.when('/pageone', {templateUrl: 'partials/pageone.html', controller: 'PageOneController'});
	$routeProvider.when('/pagetwo', {templateUrl: 'partials/pagetwo.html', controller: 'PageTwoController'});
	$routeProvider.otherwise({redirectTo: '/main'});

}]);


