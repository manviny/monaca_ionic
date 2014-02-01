'use strict';
angular.module('patrimonio24App')
.controller('HomeCtrl', function($scope, $http) {

  $http.get(  'http://patrimonio24.com/municipios/poblacion/lliria.json',{ cache:false } ).success(function (response) { 
    $scope.lits = response.lits;   
    console.log($scope.lits);
  })

  $scope.myTitle = 'Home';
  $scope.leftButtons = [
    { 
      type: 'button-stable button-clear',
      content: '<i class="icon ion-navicon"></i>',
      tap: function(e) {
      	$scope.sideMenuController.toggleLeft();
      }
    }
  ];
  $scope.rightButtons = [
    { 
      type: 'button-clear',
      content: 'Edit',
      tap: function(e) {
      	$scope.sideMenuController.toggleRight();
      }
    }
  ]

  console.log('HomeCtrl');
})