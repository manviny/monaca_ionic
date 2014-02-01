// This is a JavaScript file

angular.module('patrimonio24App',[
  'ngRoute',
  'ngResource',
  'ionic'
])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'HomeCtrl'
    })
    .state('municipio', {
      url: "/municipio",
      templateUrl: "templates/municipio.html",
      controller: 'MunicipioCtrl'
    })    
    .state('lits', {
      url: "/lugares-de-interes",
      templateUrl: "templates/lugares-de-interes.html",
      controller: 'LitsCtrl'
    })    
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html",
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "templates/contact.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html",
      controller: 'ListCtrl'
    })
    .state('list.item', {
      url: "/:item",
      templateUrl: "templates/list.item.html",
      controller: 'ListItemCtrl'
    })
    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/home");
})
