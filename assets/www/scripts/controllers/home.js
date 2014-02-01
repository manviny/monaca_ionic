'use strict';
angular.module('patrimonio24App')
.controller('HomeCtrl', function($scope, $http) {

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
  
$scope.getLocation = function() {
    var suc = function(p) {
        alert(p.coords.latitude + " " + p.coords.longitude);
    };
    var locFail = function() {
    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};

$scope.beep = function() {
    var my_media = new Media("beep.wav",
        // success callback
        function() {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function(err) {
            console.log("playAudio():Audio Error: "+err);
    }).play();
};


$scope.deviceInfo = function() {
    // console.log(device.platform,device.version,device.uuid,device.name,screen.width,screen.height,screen.colorDepth);
    console.log(device.uuid);

};


  console.log('HomeCtrl');
})