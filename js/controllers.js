'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MainController', ['$scope','$rootScope' , function($scope, $rootScope) {
	
}])
.controller('PageOneController', ['$scope','$rootScope' , function($scope, $rootScope) {
	
}])
.controller('PageTwoController', ['$scope','$rootScope' , function($scope, $rootScope) {
	
}])
.controller('AppController', ['$route','$scope','$rootScope','$location', function($route,$scope, $rootScope, $location) {
	$scope.showDrawer = "false";

	$scope.ctrlDrawer = function(){
		$scope.showDrawer = !$scope.showDrawer;
	}

	$rootScope.$on("$routeChangeStart", 
		function (event, current, previous, rejection) {
			$scope.showDrawer = false;
		}); 
}]);