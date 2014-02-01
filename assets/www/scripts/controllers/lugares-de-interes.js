'use strict';
angular.module('patrimonio24App')
.controller('LitsCtrl', function($scope, $http) {

  $http.get(  'http://patrimonio24.com/municipios/poblacion/lliria.json',{ cache:false } ).success(function (response) { 
    $scope.lits = response.lits;   
    console.log($scope.lits);
    // alert($scope.lits)
  })

  $scope.myTitle = 'Patrimonio24';
  $scope.leftButtons = [
    { 
      type: 'button-stable button-clear',
      content: '<i class="icon ion-navicon-round"></i>',
      tap: function(e) {
      	$scope.sideMenuController.toggleLeft();
      }
    }
  ];
  $scope.rightButtons = [
    { 
      type: 'button-clear',
      content: '<i class="icon ion-android-settings"></i>',
      tap: function(e) {
      	$scope.sideMenuController.toggleRight();
      }
    }
  ]

  console.log('HomeCtrl');
})