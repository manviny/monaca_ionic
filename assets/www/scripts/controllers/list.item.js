'use strict';
angular.module('patrimonio24App')
.controller('ListItemCtrl', function($scope, $stateParams) {
	$scope.item = $stateParams.item;
  console.log('ListItemCtrl');
});